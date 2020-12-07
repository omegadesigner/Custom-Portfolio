import React from 'react';
import ProjectCards from '../components/projects/ProjectCards'
import './Projects.css';


function Projects(props) {

    return (
        <div className='Projects-layout'>
            <div className='Projects-window-header'>
                <h3>Projects</h3>
                {props.currentUser ? 
                <div className='Projects-window-button'>
                    <button>Add Project</button>
                </div>
            :<></>
            }
            </div>
            <div className='Projects-window-list'>
                {props.projects.map(project => (
                    <ProjectCards
                        currentUser={props.currentUser} 
                        project={project}
                        skills={props.skills}
                        handleEditProject={props.handleEditProject}
                        handleDeleteProject={props.handleDeleteProject}
                    />
                    ))
                }
            </div>
        </div>
    );
}

export default Projects;