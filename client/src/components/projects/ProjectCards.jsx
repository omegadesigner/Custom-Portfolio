import React, {useState} from 'react';
import ProjectDetail from './ProjectDetails'
import './ProjectCards.css';

function ProjectCards(props) {
    const [displayProject, setDisplayProject] = useState("none");

    function handleDisplayProject() {
        setDisplayProject("flex")
    }
    function handleCloseProject() {
        setDisplayProject("none")
    }

    return (
        <div className='ProjectCards-layout'>
            <div 
                className='ProjectCards-info'
                onClick={() => handleDisplayProject()}
            >
                <h3>{props.project.name}</h3>
                <p>{props.project.short_description}</p>
            </div>
            <div className='ProjectCards-snapshot'>
                <img 
                    className='ProjectCards-img'
                    src={props.project.thumbnail_url}
                    alt={props.project.name}
                />
                <div className='ProjectCards-skills'>
                    {props.skills.map(skill => (
                    <div  
                        className='ProjectCards-each-skill' 
                        key={skill.id}>- {skill.name}
                    </div>
                    ))}
                </div>
            </div>
            <div 
                className="project-modal" 
                style={{display: displayProject}}
            >
                <div className="project-popup">
                    <div 
                        className="close"
                        onClick={handleCloseProject}>&times;
                    </div>
                    <div className="project-popup-details">
                        <ProjectDetail 
                            skills={props.skills}
                            project={props.project}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectCards;