import React, {useState} from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import './shared.css';

function Layout(props) {
    const [displayLogin, setDisplayLogin] = useState("none");
    const [formData, setFormData] = useState({
        username: "",
        password: ""
    })

    function handleChange(e) {
        const {name, value} = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }))
    } 

    function handleDisplayLogin() {
        setDisplayLogin("flex")
    }
    function handleCloseLogin() {
        setDisplayLogin("none")
    }

    window.onclick = function(event) {
        if (event.target.attributes[0]) {
            if (event.target.attributes[0].value == "login-modal") {
                setDisplayLogin("none")
            }
        }
    } 

    return (
        <div className='Layout-layout'>
            <Navbar currentUser={props.currentUser}/>
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
                        props.handleLogin(formData)
                        handleCloseLogin()
                    }}>
                        <h3>Login</h3>
                        <hr/>
                        <label>Username:
                            <input 
                                type='text'
                                name='username'
                                value={formData.username}
                                onChange={handleChange}
                            />
                        </label>
                        <br/>
                        <label>Password:
                            <input 
                                type='password'
                                name='password'
                                value={formData.password}
                                onChange={handleChange}
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