import React, {useState} from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import './shared.css';

function Layout(props) {
    const [displayLogin, setDisplayLogin] = useState("none");
    const [displayContact, setDisplayContact] = useState("none");
    const [formDataContact, setFormDataContact] = useState({
        contact_name: "",
        contact_email: "",
        contact_phone: "",
        message: ""
    })
    const [formDataLogin, setFormDataLogin] = useState({
        username: "",
        password: ""
    })

    function handleChangeContact(e) {
        const {name, value} = e.target;
        setFormDataContact(prevState => ({
            ...prevState,
            [name]: value
        }))
    } 

    function handleChangeLogin(e) {
        const {name, value} = e.target;
        setFormDataLogin(prevState => ({
            ...prevState,
            [name]: value
        }))
    } 

    function handleDisplayContact() {
        setDisplayContact("flex")
    }
    function handleCloseContact() {
        setDisplayContact("none")
    }

    function handleDisplayLogin() {
        setDisplayLogin("flex")
    }
    function handleCloseLogin() {
        setDisplayLogin("none")
    }

    return (
        <div className='Layout-layout'>
            <Navbar 
                currentUser={props.currentUser}
                handleDisplayContact={handleDisplayContact}
            />
            <div 
                className="contact-modal" 
                style={{display: displayContact}}
            >
                <div className="contact-popup">
                    <div 
                        className="close"
                        onClick={handleCloseContact}>&times;
                    </div>
                    <div className='contact-display'>
                            {props.currentUser ? 
                        <div className='contact-info'>
                            <h3>Contact Me</h3>
                            <div>{props.currentUser.full_name}</div>
                            <div>{props.currentUser.email}</div>
                            <div>{props.currentUser.linkedin}</div>
                            <div>{props.currentUser.phone}</div>
                        </div>
                        :<></>
                        }
                        <form className='contact-form' onSubmit={(e) => {
                            e.preventDefault()
                            props.handleContact(formDataContact)
                            handleCloseContact()
                        }}>
                            <h3>Leave Me A Message</h3>
                            <input 
                                type='text'
                                name='contact_name'
                                placeholder='Enter your name'
                                value={formDataContact.contact_name}
                                onChange={handleChangeContact}
                            />
                            <br/>
                            <input 
                                type='text'
                                name='contact_email'
                                placeholder='Enter your email'
                                value={formDataContact.username}
                                onChange={handleChangeContact}
                            />
                            <br/>
                            <input 
                                type='text'
                                name='contact_phone'
                                placeholder='Enter your phone number'
                                value={formDataContact.contact_phone}
                                onChange={handleChangeContact}
                            />
                            <br/>
                            <textarea
                                type='text'
                                name='message'
                                placeholder='Please leave a message and I will get back to you as soon as possible.'
                                value={formDataContact.message}
                                onChange={handleChangeContact}
                            />
                            <div>
                                <button>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div 
                className="login-modal" 
                style={{display: displayLogin}}
            >
                <div className="login-popup">
                    <div 
                        className="close"
                        onClick={handleCloseLogin}>&times;</div>
                    <form className='Login-form' onSubmit={(e) => {
                        e.preventDefault()
                        props.handleLogin(formDataLogin)
                        handleCloseLogin()
                    }}>
                        <h3>Login</h3>
                        <hr/>
                        <label>Username:
                            <input 
                                type='text'
                                name='username'
                                value={formDataLogin.username}
                                onChange={handleChangeLogin}
                            />
                        </label>
                        <br/>
                        <label>Password:
                            <input 
                                type='password'
                                name='password'
                                value={formDataLogin.password}
                                onChange={handleChangeLogin}
                            />
                        </label>
                        <div>
                            <button>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
            <Footer 
                currentUser={props.currentUser}
                handleLogout={props.handleLogout}
                handleDisplayLogin={handleDisplayLogin}
            />
            {props.children}
        </div>
    );
}

export default Layout;