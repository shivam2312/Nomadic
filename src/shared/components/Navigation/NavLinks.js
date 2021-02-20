import React from 'react';
import {NavLink} from 'react-router-dom';
import './NavLinks.css';

const NavLinks = props =>{
    return <ul className='nav-links'>
        <li>
            <NavLink to ="/" exact>ALL USERS</NavLink>
        </li>
        <li>
            <NavLink to ="/u1/places">NEW PLACES</NavLink>
        </li>
        <li>
            <NavLink to ="/places/new">ADD PLACE</NavLink>
        </li>
        <li>
            <NavLink to ="/auth">AUTHENTICATED</NavLink>
        </li>
    </ul>
}
export default NavLinks;