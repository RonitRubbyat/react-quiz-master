import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';
import icon from './Icon.ico'

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <NavLink className={"navbar-brand d-flex justify-content-center align-items-center"} to={'/'}>
                    <img src={icon} alt="Logo" width="30" height="24" className="d-inline-block align-text-top" />
                        <h3 className='ms-1'>Quiz Master</h3>
                </NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul id='navLink' className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link" to={"/"}>Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to={"/blogs"}>Blogs</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to={"/about"}>About us</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;