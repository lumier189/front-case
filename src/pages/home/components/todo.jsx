import React from 'react';
import { Link } from 'react-router-dom';


function TodoCard({ ...rest }) {
  return (
    <div {...rest}>
      <Link to="/todo" className="text-dark" style={{ textDecoration: "none", text: "black", }} >
        <div className="card flex-md-row  box-shadow h-md-250">
          <div className="card-body d-flex flex-column align-items-start">
            <strong className="d-inline-block mb-2 text-primary">task front 1</strong>
            <h3 className="mb-0">
              <a className="text-dark" href="#">Todo list</a>
            </h3>
            <div className="mb-1 text-muted">sept 8</div>
            <p className="card-text mb-auto">Uma simples aplicação todo</p>
          </div>
          <img className="card-img-right flex-auto d-none d-md-block" data-src="" alt="Thumbnail [200x250]" style={{maxWidth:200, height:250}} src="../../img/todolist.jpg" data-holder-rendered="true" />
        </div>
      </Link>
    </div>
  );
}

export default TodoCard;