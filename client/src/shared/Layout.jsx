import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import './shared.css';

function Layout(props) {
    return (
        <div className='Layout-layout'>
            <Navbar />
            <Footer />
        </div>
    );
}

export default Layout;