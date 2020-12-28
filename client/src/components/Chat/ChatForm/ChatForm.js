import React, {useState} from 'react';

import {TextField, IconButton} from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';


const ChatForm = (props) => {

    const [chatMsg, setChatMsg] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        alert('Message: ' + chatMsg);
    }
 
    //change visual later
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <TextField id="standard-basic" placeholder="Enter message..." value={chatMsg} onChange={event => setChatMsg(event.target.value)}/>
                <IconButton type="submit" aria-label="send message" variant="contained" color="primary">
                    <SendIcon/>
                </IconButton>
            </form>
        </div>
    );
}

export default ChatForm;
