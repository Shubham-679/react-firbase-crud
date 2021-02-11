import React from 'react';
import { Grid } from "@material-ui/core";
import Box from '@material-ui/core/Box';

const Post = (props) => {
    return (
        <Grid item xs={12} sm={5}>
            <Box boxShadow={3} mt={5}>
                {props.children}
            </Box>
        </Grid>
    );
}

export default Post;