import React from 'react';
import SkillCards from './SkillCards'
import './SkillList.css';

function SkillList(props) {
    return (
        <div className='SkillList-layout'>
            <div className='SkillList-window'>
                <div className='SkillList-window-header'>
                    <h3>Skills</h3>
                </div>
                <div className='SkillList-window-container'>
                    {props.skills.map(skill => (
                        <SkillCards key={skill.id} skill={skill}/>
                    ))
                    }
                </div>
            </div>
        </div>
    );
}

export default SkillList;