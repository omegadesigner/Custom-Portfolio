import React from 'react';
import {Link} from 'react-router-dom';
import './shared.css';

function Navbar(props) {

    return (
        <div className='Navbar-layout'>
            <Link to='/'>Home</Link>
            <Link to='/projects'>Projects</Link>
            <Link to='/contactme'>Contact Me</Link>
            <h2>User Full Name</h2>
            <Link to='/messages'>Messages</Link>
            <Link to='/useroptions'>User Options</Link>
        </div>
    );
}

export default Navbar;