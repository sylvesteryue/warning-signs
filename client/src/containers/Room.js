import {React, Component} from 'react';

import {Grid} from '@material-ui/core';

import Game from '../components/Game/Game';
import Chat from '../components/Chat/Chat';
import Scoreboard from '../components/Scoreboard/Scoreboard';

class Room extends Component {

    render() {
        return(
            <Grid container style={{ minHeight: '100vh' }}>
                <Grid item xs={9}>
                    <Game/>
                </Grid>
                <Grid item xs={3}>
                    <Scoreboard />
                    <Chat/>
                </Grid>
            </Grid>
        );
    }
}

export default Room;