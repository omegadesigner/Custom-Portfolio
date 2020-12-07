import React, {useState} from 'react';
import {editAdmin} from '../services/admin';
import UpdateAdmin from '../components/admin/UpdateAdmin'
import UpdateContact from '../components/admin/UpdateContact'
import AddSkill from '../components/skills/AddSkill'
import EditSkill from '../components/skills/EditSkill'
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
                            <EditSkill 
                                key={skill.id}
                                skill={skill}
                                handleEditSkill={props.handleEditSkill}
                                handleDeleteSkill={props.handleDeleteSkill}
                            />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default UserOptions;