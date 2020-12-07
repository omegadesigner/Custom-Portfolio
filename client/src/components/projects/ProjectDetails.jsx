import React from 'react';
import './ProjectDetails.css';

function ProjectDetails(props) {
    return (
        <div className='ProjectDetails-layout'>
            <div className='project-popup-left'>
                <img 
                    className='project-popup-img'
                    src={props.project.thumbnail_url}
                    alt={props.project.name}
                />
                <div>{props.project.github_url}</div>
                <div>{props.project.deployment_url}</div>
            </div>
            <div className='project-popup-right'>
                <h3>{props.project.name}</h3>
                <div className='project-popup-info'>
                    <div className='project-popup-skills'>
                        {props.skills.map(skill => (
                            <div  
                            className='project-popup-each-skill' 
                            key={skill.id}>- {skill.name}
                        </div>
                        ))}
                    </div>
                    <p>{props.project.long_description}</p>
                </div>
            </div>
        </div>
    );
}

export default ProjectDetails;