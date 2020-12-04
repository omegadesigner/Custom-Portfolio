import React from 'react';
import {Link} from 'react-router-dom';
import './shared.css';

function Footer(props) {
    return (
        <div className='Footer-layout'>
            <Link 
                className='Footer-link' 
                to='/dummy'>
                github.com/user
            </Link>
            <div className='Footer-login'>
            {props.currentUser ? 
            <div onClick={() => props.handleLogout()}>Logout</div>
            :
            <div onClick={() => props.handleDisplayLogin()}>Login</div>
            }
            </div>
        </div>
    );
}

export default Footer;