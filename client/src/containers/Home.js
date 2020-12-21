import {React, Component} from 'react';
import {Grid} from '@material-ui/core';

import LoginPanel from '../components/Login/LoginPanel';

class Home extends Component {
    render() {
        return(
            <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justify="center"
                style={{ minHeight: '100vh' }}
                >
                <h1>Warning Signs</h1>        
                <Grid item xs={3}>
                    <LoginPanel />
                </Grid>   

                </Grid> 
        );
    }
}

export default Home;