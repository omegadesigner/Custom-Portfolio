import React from 'react';
import './SkillCards.css';

function SkillCards(props) {
    return (
        <div className='SkillCards-layout'>
            <img 
                className='SkillCards-img'
                src={props.skill.thumbnail_url}
                alt={props.skill.name}
            />
            <div className='SkillCards-text'>
                {props.skill.name}
            </div>
        </div>
    );
}

export default SkillCards;