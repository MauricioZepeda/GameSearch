import React from 'react';
import {AppBar, Toolbar} from '@material-ui/core';  

const Header = () => { 
    return(
        <AppBar position="sticky">
            <Toolbar> 
                <h1>👾 Games Finder App 🎮</h1>
            </Toolbar>
        </AppBar>
    )
};

Header.displayName = 'Header';

export default Header;