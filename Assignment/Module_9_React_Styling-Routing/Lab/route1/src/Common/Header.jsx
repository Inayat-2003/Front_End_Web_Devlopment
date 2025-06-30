import React from 'react'
import { NavLink } from 'react-router'


function Header() {
    return (
        <div>
                {/* Navbar */}
                <nav className="navbar navbar-expand-lg bg-body">
                    <div className="container-fluid">
                        <button data-mdb-collapse-init className="navbar-toggler" type="button" data-mdb-target="#navbarExample01" aria-controls="navbarExample01" aria-expanded="false" aria-label="Toggle navigation">
                            <i className="fas fa-bars" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarExample01">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item active">
                                    <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/catalogue">Catalogue</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/about">About</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                {/* Navbar */}




        </div>
    )
}

export default Header