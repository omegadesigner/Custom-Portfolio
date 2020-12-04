import React from 'react';
import SkillCards from '../skills/SkillCards'
import './ProjectCards.css';

function ProjectCards(props) {

    return (
        <div className='ProjectCards-layout'>
            <div className='ProjectCards-info'>
                <h3>Project Name</h3>
                <p>{props.project.short_description}</p>
            </div>
            <div className='ProjectCards-snapshot'>
                <img 
                    className='ProjectCards-img'
                    src={props.project.thumbnail_url}
                    alt="{props.project.name}"
                />
                <div className='ProjectCards-skills'>
                    {props.skills.map(skill => (
                        // <SkillCards 
                        //     className='ProjectCards-skills'
                        //     skill={skill}
                        // />
                    <div key={skill.id}>- {skill.name}</div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default ProjectCards;