import React from 'react';

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
