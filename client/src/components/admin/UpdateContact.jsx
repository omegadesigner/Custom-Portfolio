import React, {useState} from 'react';
import './UpdateContact.css';

function UpdateContact(props) {
    const [formData, setFormData] = useState({
        name: "",
        password: "",
    })

    function handleChange(e) {
        const {name, value} = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }))
    } 

    return (
        <div className='UpdateContact-layout'>
            <div  className='UpdateContact-card'>
                <h3>Edit Admin Info</h3>
                <form 
                    className='UpdateContact-form'
                    onSubmit={(e) => {
                    e.preventDefault();
                    props.handleUpdate(props.currentUser.id, formData);
                }}>
                    <input 
                        type='text'
                        name='username'
                        placeholder='Change Username'
                        value={formData.name}
                        onChange={handleChange}
                    />
                    <input 
                        type='text'
                        name='username'
                        placeholder='Change Username'
                        value={formData.name}
                        onChange={handleChange}
                    />
                    <input 
                        type='text'
                        name='password'
                        placeholder='Change Password'
                        value={formData.name}
                        onChange={handleChange}
                    />
                    <input 
                        type='text'
                        name='password'
                        placeholder='Change Password'
                        value={formData.name}
                        onChange={handleChange}
                    />
                    <button>Submit</button>
                </form>
            </div>
        </div>
    );
}

export default UpdateContact;