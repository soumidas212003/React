import React from 'react'
import { NavLink } from 'react-router-dom'
import "../CSS/Header.css"
import Soumita from "../assets/react.svg"
const Header = () => {
return <>
    <ul className='nav'>
        <li><NavLink to="/" className="navlink"><img src={Soumita}/></NavLink></li>
        <li>
            <ul>
                <li><NavLink to="/" className="navlink">Home</NavLink></li>
                <li><NavLink to="/about" className="navlink">About</NavLink></li>
                <li><NavLink to="/contact" className="navlink">Contact</NavLink></li>
                <li><NavLink to="/service" className="navlink">Service</NavLink></li>
            </ul>
        </li>
    </ul>
</>
}
export default Header
