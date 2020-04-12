import React, {Component} from 'react';
import './Navbar.css'

function Navbar() {
    return (
        <nav className='bg-purple'> 
            <ul className="flex-row">
                <li>Home</li>
                <li>Profile</li>
                <li>Logout</li>
            </ul>
        </nav>
    )
}

export default Navbar;
