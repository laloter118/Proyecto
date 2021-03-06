import React from 'react'
import {Link} from 'react-router-dom'



function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link to="/">
                        <img src='./FXmusica.png' height= "50" />
                    
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto ">
                        <li className="nav-item">
                        <Link className="nav-link" to="/" >Inicio</Link>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#"></a>
                        </li>
                        
                        <li className="nav-item">
                        <Link className="nav-link" to="/Listar" >Listas</Link>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-success" type="submit">Buscar</button>
                    </form>
                    </div>
                </div>
                </nav>
        </div>
    )
}

export default Navbar
