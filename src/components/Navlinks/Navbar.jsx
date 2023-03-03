import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { NavLink } from "react-router-dom";
import '../Navlinks/navbar.module.css'


export default function Navbar() {
    return (
    <div className="nav-bar">
        <nav>
            <NavLink exact='true' activeclassname='active' to='/' >
                <FontAwesomeIcon icon={faHome} color= 'white'></FontAwesomeIcon>
            </NavLink>
        </nav>
    
    
    
    </div>
    )
}