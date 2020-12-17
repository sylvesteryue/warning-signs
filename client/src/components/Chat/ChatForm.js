import {React, Component} from 'react';


class ChatForm extends Component {
    constructor(props) {
        super(props);

        this.state = {chatMsg: ''};

        this.handleChatMsgChange = this.handleChatMsgChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleSubmit(event) {
        alert('Player name: ' + this.state.playerName + '   Room Code: ' + this.state.roomCode);
    }

    handleChatMsgChange(event) {
        this.setState({chatMsg: event.target.value})
    }


    //change visual later
    render() {
        return (
            <div style={{position: "fixed", bottom: "0"}}>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="Enter message..." value={this.state.chatMsg} onChange={this.handleChatMsgChange} style={{width: '75%'}}></input>
                    <input type="submit" value="Enter"/>
                </form>
            </div>
        );
    }
}

export default ChatForm;
