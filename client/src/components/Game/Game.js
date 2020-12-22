import React from 'react';
import {Grid} from '@material-ui/core';

import Hand from './Hand/Hand';
import Table from './Table/Table';

const Game = (props) => {

    return(
        <div style={{height: '100%'}}>
            <Table/>
            <Hand/>
        </div>
    );
};


export default Game;