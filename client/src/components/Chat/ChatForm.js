import {React, Component} from 'react';

import {TextField, IconButton, makeStyles} from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';


class ChatForm extends Component {
    constructor(props) {
        super(props);
        this.state = {chatMsg: ''};

        this.handleChatMsgChange = this.handleChatMsgChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleSubmit(event) {
        alert('Message: ' + this.state.chatMsg);
    }

    handleChatMsgChange(event) {
        this.setState({chatMsg: event.target.value})
    }


    //change visual later
    render() {
        return (
            <div style={{position: "fixed", bottom: "0"}}>
                <form onSubmit={this.handleSubmit}>
                    {/* <input type="text" placeholder="Enter message..." value={this.state.chatMsg} onChange={this.handleChatMsgChange} style={{width: '75%'}}></input> */}
                    <TextField id="standard-basic" placeholder="Enter message..." value={this.state.chatMsg} onChange={this.handleChatMsgChange}/>
                    <IconButton type="submit" aria-label="send message" variant="contained" color="primary">
                        <SendIcon/>
                    </IconButton>
                </form>
            </div>
        );
    }
}

export default ChatForm;
