import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import '../App.css';

const NavBar = () => {     
        return(
                <nav>
                        <NavLink exact to="/" activeClassName = "active"> Погода </NavLink> |
                        <NavLink to="/forecast"> Прогноз </NavLink> |
                        <NavLink to="/about"> О сайте </NavLink>
                        <br/>
                        <br/>
                </nav>
        )
}
export default NavBar;