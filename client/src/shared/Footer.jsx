import React from 'react';
import {Link} from 'react-router-dom';
import './shared.css';

function Footer(props) {
    return (
        <div className='Footer-layout'>
            <Link to='/dummy'>github.com/user</Link>
            <Link to='/login'>L</Link>
        </div>
    );
}

export default Footer;