import React, { useState } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import GamesContext from './contexts/GamesContext';
import GenresContextProvider from './contexts/GenresContext';
import PlatformsContextProvider from './contexts/PlatformsContext';

import Header from './components/Common/Header';
import NotFound from './components/NotFound';

import SelectGenres from './components/Genres/SelectGenres';
import SelectPlatforms from './components/Platforms/SelectPlatforms';

import { Grid, Paper } from '@material-ui/core';

import './assets/css/styles.css';
import SearchGames from './components/Games/SearchGames'; 
import GameDetails from './components/Games/GameDetails';

const App = () => { 
    const [ plataforma, setPlataforma ] = useState(0)
    const [ genero, setGenero ] = useState(0)

    return(
        <BrowserRouter>
            <Header />
            <Switch> 
                <Route exact path='/'>  
                    <PlatformsContextProvider>
                        <SelectPlatforms setPlataforma={setPlataforma} />
                    </PlatformsContextProvider>
                
                    <GenresContextProvider>
                        <SelectGenres setGenero={setGenero} />
                    </GenresContextProvider>
                    
                    <GamesContext>
                        <SearchGames plataforma={plataforma} genero={genero} /> 
                    </GamesContext>    
                </Route>

                <Route path='/game/:gameId'>
                    <GameDetails />
                </Route>

                <Route component={NotFound} />
            </Switch>
        </BrowserRouter>
    )
};

App.displayName = 'App';

export default App;