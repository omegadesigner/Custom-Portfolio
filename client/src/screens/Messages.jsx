import React from 'react';
import MessageCards from '../components/admin/MessageCards'
import './Messages.css';

function Messages(props) {
    return (
        <div className='Messages-layout'>
            <div className='Messages-window-header'>
                <h3>Messages</h3>
            </div>
            <div className='Messages-window-list'>
                {props.messages.map(message => (
                    <MessageCards 
                        message={message}
                    />
                    ))
                }
            </div>
        </div>
    );
}

export default Messages;