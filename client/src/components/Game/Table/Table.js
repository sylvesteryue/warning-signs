import React from 'react';
import {Grid, Button} from '@material-ui/core';

import Date from '../Date/Date';

const Table = (props) => {

    return(
        <Grid container style={{height: '75%'}}>
            <Grid container item xs={12} spacing={3}>
                <Grid item xs={4}>
                    <Date/>
                </Grid>
                <Grid item xs={4}>
                    <Date/>
                </Grid>
                <Grid item xs={4}>
                    <Date/>
                </Grid>
            </Grid>
            <Grid container item xs={12} spacing={3}>
                <Grid item xs={4}>
                        <Date/>
                    </Grid>
                    <Grid item xs={4}>
                        <Date/>
                    </Grid>
                    <Grid item xs={4}>
                        <Date/>
                    </Grid>
                </Grid>
            <Grid container item xs={12} spacing={3}>
                <Grid item xs={4}>
                        <Date/>
                </Grid>
                <Grid item xs={4}>
                    <Date/>
                </Grid>
                <Grid item xs={4}>
                    <Date/>
                </Grid>
            </Grid>

            <Grid container item xs={12} spacing={0} alignItems="center" justify="center">
                <Grid item xs={4} alignItems="center" justify="center">
                    <Button variant="contained" color="primary">Submit</Button>
                </Grid> 
            </Grid>
        </Grid>
    );
};


export default Table;