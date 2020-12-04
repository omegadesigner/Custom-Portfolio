import React from 'react';
import ProjectCards from '../components/projects/ProjectCards'
import './Projects.css';


function Projects(props) {

    return (
        <div className='Projects-layout'>
            <div className='Projects-window-header'>
                <h3>Projects</h3>
            </div>
            <div className='Projects-window-list'>
                {props.projects.map(project => (
                    <ProjectCards 
                        project={project}
                        skills={props.skills}
                    />
                    ))
                }
            </div>
        </div>
    );
}

export default Projects;