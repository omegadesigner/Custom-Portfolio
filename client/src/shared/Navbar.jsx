import React from 'react';
import {Link} from 'react-router-dom';
import './shared.css';

function Navbar(props) {

    return (
        <div className='Navbar-layout'>
            <div className='Navbar-links'>
                <Link to='/'>Home</Link>
                <Link to='/projects'>Projects</Link>
                <div onClick={() => props.handleDisplayContact()}>Contact Me</div>
            </div>
            <h2 className='Navbar-username'>
                User Full Name
            </h2>
            {props.currentUser ?
            <div className='Navbar-links-admin'>
                <Link to='/messages'>Messages</Link>
                <Link to='/useroptions'>User Options</Link>
            </div>
            :
            <div className='Navbar-links-admin'/>
            }
        </div>
    );
}

export default Navbar;