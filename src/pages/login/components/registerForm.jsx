import React,{useRef} from "react";
import Input from "../../../template/components/input";
import { Form } from "@unform/web";
import * as yup from "yup";
import auth from '../../../services/auth.service'
import { useNavigate } from "react-router-dom";

export default function RegisterForm() {
  const navigate = useNavigate()
  const formRef = useRef(null)
  
  async function handleSubmit(data, { reset }) {
   
    try {
      const schema = yup.object({    
        name: yup.string().required('O nome é obrigatório.'), 
        email: yup.string().email().required('O email é obrigatório.'),
        password: yup.string().required('A senha é obrigatória.'),      
        confirmPassword: yup.string().required('As senhas devem ser iguais.').oneOf([yup.ref("password")]),
      })
      await schema.validate(data, {
        abortEarly: false,
      })
      const user = await auth.register(data.name,data.email,data.password)
      navigate('/', {
        state:{
          type:'success',
          message:'Cadastro realizado com sucesso'
        }
      })

      reset()
    } catch (err) {
      if (err instanceof yup.ValidationError) {
        const errorMessages = {};
        err.inner.forEach(error => {
          errorMessages[error.path] = error.message;
        })
        formRef.current.setErrors(errorMessages);
      }
    }
  }
  return (


    <div className="">
      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>
      <Form className="mx-1 mx-md-4" ref={formRef} onSubmit={handleSubmit}>
        <div className="d-flex flex-row align-items-center mb-4">
          <i className="fas fa-user fa-lg me-3 fa-fw"></i>
          <div className="form-outline flex-fill mb-0">
            <label className="form-label">Nome</label>
            <Input type="text" name="name" className="form-control" />
          </div>
        </div>
        <div className="d-flex flex-row align-items-center mb-4">
          <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
          <div className="form-outline flex-fill mb-0">
            <label className="form-label">Email</label>
            <Input type="text" name="email" className="form-control" />
          </div>
        </div>

        <div className="d-flex flex-row align-items-center mb-4">
          <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
          <div className="form-outline flex-fill mb-0">
            <label className="form-label" >Senha</label>
            <Input type="password" name="password"  className="form-control" />
          </div>
        </div>

        <div className="d-flex flex-row align-items-center mb-4">
          <i className="fas fa-key fa-lg me-3 fa-fw"></i>
          <div className="form-outline flex-fill mb-0">
            <label className="form-label" >Confirme sua senha</label>
            <Input type="password"  name="confirmPassword" className="form-control" />
          </div>
        </div>


        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
          <button type="submit" className="btn btn-primary btn-md">Sing up</button>
        </div>

      </Form>
    </div>


  )
}