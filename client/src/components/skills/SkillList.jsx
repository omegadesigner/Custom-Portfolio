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
                {props.skills.map(skill => (
                    <SkillCards skill={skill}/>
                ))
                }
            </div>
        </div>
    );
}

export default SkillList;