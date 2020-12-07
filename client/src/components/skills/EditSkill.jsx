import React, {useState} from 'react';
import './EditSkill.css';

function EditSkill(props) {
    const [displayEditSkill, setDisplayEditSkill] = useState("none");
    const [formData, setFormData] = useState({
        thumbnail_url: props.skill.thumbnail_url,
        name: props.skill.name,
        display: false
    })
    

    function handleDisplayEditSkill() {
        setDisplayEditSkill("flex")
    }
    function handleCloseEditSkill() {
        setDisplayEditSkill("none")
    }

    function handleChange(e) {
        const {name, value} = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }))
    } 

    return (
        <div className='EditSkill-layout'>
        <div 
            className='UserOptions-skill-card' 
        >
                <input 
                    type="checkbox"
                    name="display"
                    value="true"
                    />
                <img 
                    className='UserOptions-skill-img' 
                    src={props.skill.thumbnail_url} 
                    alt={props.skill.name}
                    />
                <div> - {props.skill.name}</div>
                <button onClick={handleDisplayEditSkill}>Edit</button>
                <div 
                    className="editSkill-modal" 
                    style={{display: displayEditSkill}}
                    >
                    <div className="editSkill-popup">
                        <div 
                            className="close"
                            onClick={handleCloseEditSkill}>&times;
                        </div>
                        <div className="editSkill-input">
                            <h3>Edit Skill</h3>
                            <img 
                                className='AddSkill-img'
                                src={formData.thumbnail_url} 
                                alt={formData.name}
                            />
                            <form 
                                className='editSkill-form'
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    props.handleEditSkill(props.skill.id, formData);
                                    handleCloseEditSkill()
                                }}>
                                <input 
                                    type='text'
                                    name='thumbnail_url'
                                    value={formData.thumbnail_url}
                                    onChange={handleChange}
                                    />
                                <input 
                                    type='text'
                                    name='name'
                                    value={formData.name}
                                    onChange={handleChange}
                                    />
                                <button>Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
                <button onClick={() => props.handleDeleteSkill(props.skill.id)}>Delete</button>
            </div>
        </div>
    );
}

export default EditSkill;