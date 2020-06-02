import React from 'react';
import {AppBar, Toolbar} from '@material-ui/core';  

const Header = () => { 
    return(
        <AppBar position="sticky">
            <Toolbar> 
                <h1>
                    <span role='img' aria-label='img1'>👾</span>
                        Games Finder App
                    <span role='img' aria-label='img2'>🎮</span> 
                   
                </h1>
            </Toolbar>
        </AppBar>
    )
};

Header.displayName = 'Header';

export default Header;