import React, { useState, useEffect } from 'react';
import Template from '../../template/main';
import TodoForm from './components/form';
import List from './components/list';
import todoService from '../../services/todo.service';
import { useNavigate } from 'react-router-dom';

const Todo = () => {
  const [tasks, setTasks] = useState([]);
  let navigate = useNavigate();


  useEffect(() => {
    todoService.list().then(({ data: tasks }) => {
      setTasks(tasks)
    }).catch(() => {
      navigate('/', {
        state: {
          type: 'danger',
          message: 'token expirado, faça login novamente'
        }
      })
    })
  }, []);

  function handleSubmit(data) {
    console.log(tasks, data)
    setTasks([...tasks, data])
    todoService.create(data)
  }

  function handleDelete(task) {
    if (!window.confirm('crtza bro?')) return
    const newTasks = [...tasks]
    newTasks.splice(tasks.indexOf(task), 1)
    setTasks(newTasks)
    todoService.remove(task.id)
  }

  function handleDone(task) {
    const newTask = { ...task }
    newTask.isDone = true
    const newTasks = [...tasks]
    newTasks.splice(tasks.indexOf(task), 1, newTask)
    setTasks(newTasks)
    todoService.edit(task.id, { isDone: true })
  }

  return (
    <Template>
      <div className="container py-5" >
        <h1 className=''>Todo list</h1>
        <List tasks={tasks} onDelete={handleDelete} onDone={handleDone} ></List>
        <h2 className='mt-5'>New task</h2>
        <TodoForm onSubmit={handleSubmit} />
      </div>
    </Template>
  );
}

export default Todo;
