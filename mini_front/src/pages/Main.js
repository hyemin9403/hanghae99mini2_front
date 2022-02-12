import React from 'react';
import { Grid } from '../elements';
import Recent from '../components/Recent';
import PostList from '../components/PostList';

const main = () => {
    return (
        <>
            <Grid margin="auto" width="1000px" center="center" color="red" >
                <Recent />
                <PostList />
            </Grid>
        </>
    );
};

export default main;