import React from 'react';
import {editAdmin} from '../services/admin';
import UpdateAdmin from '../components/admin/UpdateAdmin'
import UpdateContact from '../components/admin/UpdateContact'
import AddSkill from '../components/skills/AddSkill'
import './UserOptions.css';

function UserOptions(props) {

    async function handleUpdate(id, adminData) {
        await editAdmin(id, adminData);
    }

    return (
        <div className='UserOptions-layout'>
            <div className='UserOptions-left-panel'>
                <div className='UserOptions-edit-admin'>
                    <UpdateAdmin 
                        currentUser={props.currentUser}
                        handleUpdate={handleUpdate}
                    />
                    <AddSkill 
                        handleCreateSkill={props.handleCreateSkill}
                    />
                </div>
                <div className='UserOptions-edit-contact'>
                    <UpdateContact />
                </div>
            </div>
            <div className='UserOptions-right-panel'>
                <div className='UserOptions-skill-list'>
                    {props.skills.map((skill) => (
                        <div 
                        className='UserOptions-skill-card' 
                        key={skill.id}
                        >
                            <img 
                                className='UserOptions-skill-img' 
                                src={skill.thumbnail_url} 
                                alt={skill.name}
                                />
                            <div> - {skill.name}</div>
                            <button>Edit</button>
                            <button>Delete</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default UserOptions;