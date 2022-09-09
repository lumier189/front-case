import React from 'react';
import Card from '../../../template/components/card';
import Todo from '../../../services/todo.service';
import Task from './task'

function List({ onDelete, onDone, tasks }) {

  return (
    <Card>       
      <div className="accordion accordion-flush" id="accordionFlushExample">
        {tasks.map((task) => <Task task={task} onDelete={onDelete} onDone={onDone} />)}
      </div>
    </Card>
  );
}

export default List;