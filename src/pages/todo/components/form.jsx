import React, { useRef, useState } from 'react';
import { Form } from '@unform/web'
import Input from '../../../template/components/input'
import * as yup from 'yup'
import InputText from '../../../template/components/textarea';
import todoService from '../../../services/todo.service';
import Card from '../../../template/components/card';

function TodoForm({ onSubmit }) {
  const formRef = useRef(null)

  async function handleSubmit(data, { reset }) {
    console.log(data)
    try {
      const schema = yup.object({
        title: yup.string().required("Insira um título"),
        description: yup.string(),
      })
      await schema.validate(data, {
        abortEarly: false,
      })

      onSubmit(data)
      reset()
      document.getElementById('textarea').innerHTML = ''
      return false
    } catch (err) {
      console.error(err)
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
    <Card>      
      <Form ref={formRef} onSubmit={handleSubmit}>
        <div className='form-group mb-3'>

          <label className="form-label" htmlFor=''>Título</label>
          <Input type="text" name="title" placeholder="digite um título para sua tarefa..." className="form-control" multiline />
        </div>
        <div className='form-group '>
          <label className="form-label">Descrição</label>
          <InputText type="textArea" name="description" placeholder='descreva sua tarefa...' id="textarea" className="form-control" rows="4" />
        </div>
        <div className="text-end mt-4">
          <button type="submit" className="btn btn-success btn-md"> Adicionar </button>
        </div>
      </Form>
    </Card>
  );
}

export default TodoForm;