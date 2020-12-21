import {React, Component} from 'react';

import Game from '../components/Game/Game';
import Chat from '../components/Chat/Chat';
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
                    <Chat/>
                </div>
            </div>
        );
    }
}

export default Room;