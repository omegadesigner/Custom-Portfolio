import React from 'react';

function MessageCards(props) {
    return (
        <div className='MessageCards-layout'>
            <div 
                className='MessageCards-info'
            >
                <h3>{props.message.contact_name}</h3>
                <h3>{props.message.contact_email}</h3>
                <h3>{props.message.contact_phone}</h3>
            </div>
            <div className='MessageCards-snapshot'>
                <h3>{props.message.created_at}</h3>
                <p>{props.message.message}</p>
            </div>
            <div 
                className="message-modal" 
                // style={{display: displayProject}}
            >
                <div className="message-popup">
                    {/* <div 
                        className="close"
                        onClick={handleCloseProject}>&times;
                    </div> */}
                    <div className="project-popup-details">
                        {/* <MessageDetails 
                            message={props.message}
                        /> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MessageCards;