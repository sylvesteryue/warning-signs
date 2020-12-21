import {React, Component} from 'react';

import ChatContainer from './ChatContainer/ChatContainer';
import ChatForm from './ChatForm/ChatForm';

const Chat = (props) => {

    return(
        <div>
            <ChatContainer/>
            <ChatForm/>
        </div>
    );
}

export default Chat;