import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';
import icon from './Icon.ico'

const Header = () => {
    return (
        <nav id='navLink' class="navbar navbar-expand-lg">
            <div class="container-fluid">
                <NavLink class="navbar-brand d-flex justify-content-center align-items-center" to={'/'}>
                    <img src={icon} alt="Logo" width="30" height="24" class="d-inline-block align-text-top" />
                        <h3 className='ms-1'>Quiz Master</h3>
                </NavLink>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item">
                            <NavLink class="nav-link active" aria-current="page" to={"/"}>Home</NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink class="nav-link" to={"/blogs"}>Blogs</NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink class="nav-link" to={"/about"}>About us</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;