import {React, Component} from 'react';


class LoginPanel extends Component {
    
    constructor(props) {
        super(props);

        this.state = {playerName: '', roomCode: ''};

        this.handlePlayerNameChange = this.handlePlayerNameChange.bind(this);
        this.handleRoomCodeChange = this.handleRoomCodeChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleSubmit(event) {
        alert('Player name: ' + this.state.playerName + '   Room Code: ' + this.state.roomCode);
    }

    handlePlayerNameChange(event) {
        this.setState({playerName: event.target.value})
    }

    handleRoomCodeChange(event) {
        this.setState({roomCode: event.target.value})
    }

    //change layout of form later
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Player Name</label>
                    <input type="text" value={this.state.playerName} onChange={this.handlePlayerNameChange}></input>
                    <label>Room Code</label>
                    <input type="text" value={this.state.roomCode} onChange={this.handleRoomCodeChange}></input>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        );
    }
}

export default LoginPanel;