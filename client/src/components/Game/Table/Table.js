import React from 'react';
import {Grid, Button} from '@material-ui/core';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import Date from '../Date/Date';


const Table = (props) => {




    return(
        <div>
            <Carousel>
                <div key="slide1" style={{ padding: 20, height: '50vh' }}>
                    <Date/>
                </div>
                <div key="slide1" style={{ padding: 20, height: '50vh' }}>
                    <Date/>
                </div>
                <div key="slide1" style={{ padding: 20, height: '50vh' }}>
                    <Date/>
                </div>
            </Carousel>
            
            
            <Grid container xs={12} spacing={0} alignItems="center" justify="center" direction="column">
                <Grid item xs={4}>
                    <Button variant="contained" color="primary">Date</Button>
                </Grid> 
            </Grid>

            
            
            {/* <Grid container item xs={12} spacing={3}>
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
            </Grid> */}
        </div>
    );
};


export default Table;