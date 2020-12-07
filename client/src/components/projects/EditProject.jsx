import React, {useState} from 'react';
import './EditProject.css';

function EditProject(props) {
    const [formData, setFormData] = useState({
        name: props.project.name,
        thumbnail_url: props.project.thumbnail_url,
        github_url: props.project.github_url,
        deployment_url: props.project.deployment_url,
        short_description: props.project.short_description,
        long_description: props.project.long_description
    })

    function handleChange(e) {
        const {name, value} = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }))
    } 

    return (
        <div>
            <form 
                className='EditProject-layout'
                onSubmit={(e) => {
                    e.preventDefault();
                    props.handleEditProject(props.project.id, formData)
                    props.handleCloseProject()
                }}>

            <div className='project-popup-left'>
                <img 
                    className='project-popup-img'
                    src={props.project.thumbnail_url}
                    alt={props.project.name}
                    />
                <input
                    type='text'
                    name='thumbnail_url'
                    value={formData.thumbnail_url}
                    onChange={handleChange} 
                />
                <input
                    type='text'
                    name='github_url'
                    value={formData.github_url}
                    onChange={handleChange}  
                />
                <input 
                    type='text'
                    name='deployment_url'
                    value={formData.deployment_url}
                    onChange={handleChange} 
                />
            </div>
            <div className='project-popup-right-edit'>
                <input 
                    type='text'
                    name='name'
                    value={formData.name}
                    onChange={handleChange} 
                />
                <div className='project-popup-info'>
                    <div className='project-popup-skills-edit'>
                        {props.skills.map(skill => (
                            <div  
                            className='project-popup-each-skill' 
                            key={skill.id}>
                                <input type='checkbox'/>- {skill.name}
                        </div>
                        ))}
                    </div>
                    <div className='project-popup-text-boxes' >
                        <textarea
                            type='text'
                            name='short_description'
                            value={formData.short_description}
                            onChange={handleChange}
                            />
                        <textarea
                            type='text'
                            name='long_description'
                            value={formData.long_description}
                            onChange={handleChange}
                            />
                    </div>
                </div>
                <div  className='project-popup-text-buttons'>
                    <button>Submit</button>
                    <button onClick={() => props.handleDeleteProject(props.project.id)}>Delete</button>
                </div>
            </div>
            </form>
        </div>
    );
}

export default EditProject;