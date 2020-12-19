import {React, Component} from 'react';

import Game from '../components/Game/Game';
import ChatForm from '../components/Chat/ChatForm';
import ChatContainer from '../components/Chat/ChatContainer/ChatContainer';
import Scoreboard from '../components/Scoreboard/Scoreboard';

class Room extends Component {

    render() {
        return(
            <div style={{display: 'flex', flexDirection: 'row'}}>
                <div style={{width: '75%'}}>
                    <Game/>
                </div>

                <div style={{width: '25%'}}>
                    <Scoreboard />
                    <ChatContainer/>
                    <ChatForm/>
                </div>
            </div>
        );
    }
}

export default Room;