import React from 'react';

function Task({onDelete, onEdit, onDone, task}) {
    return ( 
        <div key={task.id} className="accordion-item"  >
          <h2 className="accordion-header" id={`title-${task.id}`} >
            <button className="accordion-button collapsed d-flex justify" type="button" data-bs-toggle="collapse" data-bs-target={`#task-${task.id}`} >
            {task.title} {task.isDone ? <b className="text-success float-end"> &nbsp; Feito!</b> : ''}   
             
            </button>
          </h2>
          <div id={`task-${task.id}`} className="accordion-collapse collapse " aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
            <div  className="accordion-body px-5 bg-gray-100">{task.description}</div>
            <div className='text-end'>
            <a href="#" onClick={(e)=>onDelete(task)} className='btn btn-link btn-sm'>excluir</a>
              {!task.isDone &&  <a href="#" onClick={(e)=>onDone(task)} className='btn btn-link btn-sm'>pronto</a>}
             
            </div>
          </div>
        </div>
     );
}

export default Task;