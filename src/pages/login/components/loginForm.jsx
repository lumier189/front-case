import React, { useRef } from "react";
import Input from "../../../template/components/input";
import { Form } from "@unform/web";
import * as yup from "yup";
import auth from '../../../services/auth.service';
import { useNavigate } from "react-router-dom";


export default function LoginForm() {
  const formRef = useRef(null);
  const navigate = useNavigate();

  async function handleSubmit(data, { reset }) {
    console.log(data)
    try {
      const schema = yup.object({
        email: yup.string().email().required(),
        password: yup.string().required(),
      })
      await schema.validate(data, {
        abortEarly: false,
      })

      const { data: { token } } = await auth.login(data.email, data.password)

      sessionStorage.setItem('token', token)

      navigate('/home')

      reset()
      return false
    } catch (err) {
      if (err instanceof yup.ValidationError) {
        const errorMessages = {};
        err.inner.forEach(error => {
          errorMessages[error.path] = error.message;
        })
        formRef.current.setErrors(errorMessages);
      }
      if(err.response){
        navigate('/',{
          state:{
            type:'danger',
            message:err.response.data.message,
          }
        })
      }
    }
  }

  return (
    <div className="">
      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign in</p>
      <Form className="mx-1 mx-md-4" ref={formRef} onSubmit={handleSubmit}>

        <div className="d-flex flex-row align-items-center mb-4">
          <i className="fas fa-user fa-lg me-3 fa-fw"></i>
          <div className="form-outline flex-fill mb-0">
            <label className="form-label" htmlFor="email">Email</label>
            <Input type="text" name="email" className="form-control" />
          </div>
        </div>

        <div className="d-flex flex-row align-items-center mb-4">
          <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
          <div className="form-outline flex-fill mb-0">
            <label className="form-label" htmlFor="password">Password</label>
            <Input type="password" name="password" className="form-control" />
          </div>
        </div>

        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
          <button type="submit" className="btn btn-primary btn-md">Sing in</button>
        </div>

      </Form>
    </div>
  )
}