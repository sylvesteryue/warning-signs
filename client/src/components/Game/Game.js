import React from 'react';

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