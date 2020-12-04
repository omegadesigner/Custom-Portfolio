import React, {useState} from 'react';
import './AddSkill.css';

function AddSkill(props) {
    const [formData, setFormData] = useState({
        thumbnail_url: "",
        name: "",
    })

    function handleChange(e) {
        const {name, value} = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }))
    } 
    
    return (
        <div className='AddSkill-layout'>
            <div className='AddSkill-card'>
                <h3>Add New Skill</h3>
                <img 
                    className='AddSkill-img'
                    src={formData.thumbnail_url} 
                    alt={formData.name}
                 />
                <form 
                    className='AddSkill-form'
                    onSubmit={(e) => {
                    e.preventDefault();
                    props.handleCreateSkill(formData);
                }}>
                    <input 
                        type='text'
                        name='thumbnail_url'
                        placeholder='Change Thumbnail URL'
                        value={formData.thumbnail_url}
                        onChange={handleChange}
                    />
                    <input 
                        type='text'
                        name='name'
                        placeholder='Change name'
                        value={formData.name}
                        onChange={handleChange}
                    />
                    <button>Submit</button>
                </form>
            </div>
        </div>
    );
}

export default AddSkill;