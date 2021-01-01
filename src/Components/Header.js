import React from 'react';
import Typography from '@material-ui/core/Typography';

function Header() {
    return(
        <Typography 
            variant="h1" 
            gutterBottom
            style={{padding: 16}}
        >To-Do App
        </Typography>
    ); 
}

export default Header; 