import React from 'react';
import { Link } from 'react-router-dom'

const Header = () => {
  function logout(){
    sessionStorage.clear()
  }


  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container end">
          <div className="row w-100">
          <ul className="navbar-nav ">
            <li className="nav-item">
              <Link className="nav-link " to="/home"> Inicio </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " to="/todo"> To-do </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " to="/service"> Star Wars</Link>
            </li>
            { sessionStorage.getItem("token") && <li className="nav-item">
              <Link className="nav-link" onClick={(e)=>{logout()}} to="/"> Sair </Link>
            </li>}
          </ul>
            </div> 


        </div>
      </nav>
    </header>
  );
}

export default Header;
