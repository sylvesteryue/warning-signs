import React, {useState} from 'react';
import {TextField, Button} from '@material-ui/core';

import classes from './LoginPanel.module.css';


const LoginPanel = (props) => {

    const [playerName, setPlayerName] = useState("");
    const [roomCode, setRoomCode] = useState("");
    
    const handleSubmit = (event) => {
        event.preventDefault();
        alert('Player name: ' + playerName + '   Room Code: ' + roomCode);
    }


    //change layout of form later
    return(
        <form onSubmit={handleSubmit}>
            <div>
                <TextField id="standard-basic" label="Player Name" value={playerName} inputProps={{min: 0, style: { textAlign: 'center' }}} onChange={event => setPlayerName(event.target.value)}/>
            </div>
            <div>   
                <TextField id="standard-basic" label="Room Code" type="text" value={roomCode} inputProps={{min: 0, style: { textAlign: 'center' }}} onChange={event => setRoomCode(event.target.value)}/> 
            </div>
            <div style={{textAlign: "center"}}>
                <Button variant="contained" color="primary" type="submit">Enter</Button>
            </div>
        </form>
    );
}

export default LoginPanel;