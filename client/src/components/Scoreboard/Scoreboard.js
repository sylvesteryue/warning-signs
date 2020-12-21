import React from 'react';

import {Table, TableBody, TableRow, TableCell, Chip} from '@material-ui/core';

let id = 0;
function createData(name, points, isSingle) {
    id += 1;
    return {id, name, points, isSingle};
}

const scoreboard = (props) => {

    const dummyData = [
        createData('Player 1', 5, false),
        createData('Player 2', 4, true), 
        createData('Player 3', 7, false)
    ]


    return(
        <div>
            {/* <List>
                <ListItem>
                    <ListItemText primary="Player 1"/>
                </ListItem>
                <ListItem>
                    <ListItemText primary="Player 2"/>
                </ListItem>
                <ListItem>
                    <ListItemText primary="Player 3"/>
                </ListItem>
            </List> */}

            <Table>
                <TableBody>
                    {
                        dummyData.map(player => (
                            <TableRow key={player.id}>
                                <TableCell>{player.name}</TableCell>
                                <TableCell>{player.points}</TableCell>
                                <TableCell>
                                    {/* <Icon color="error" fontSize="small">Single</Icon> */}
                                    {player.isSingle ? <Chip label="The Single" color="secondary"/> : null}
                                </TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </div>
    );
};


export default scoreboard;