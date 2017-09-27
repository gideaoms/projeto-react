import React from 'react'
import { Link } from 'react-router-dom'

export default props => (
  <nav className="navbar navbar-toggleable-sm navbar-inverse bg-inverse mb-3">
    <div className="container">
      <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <Link className="navbar-brand" to='/'>Meu Site</Link>

      <div className="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
        <ul className="navbar-nav"></ul>
        <ul className="navbar-nav">
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="javascript:;" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Cadastros
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <Link className="dropdown-item" to='/state'>UF</Link>
              <Link className="dropdown-item" to='/login'>Login</Link>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </nav>
)