import React, { createContext, useState } from 'react';
import { getGames, getGameDetail } from './../constants';

export const GamesContext = createContext();

const GamesContextProvider = ({ children }) => {
    const [gamesList, setGamesList] = useState([]); 
    const [gameDetail, setGameDetail] = useState({});
    const [doneGamesFetch, setDoneGamesFetch] = useState(false);
      
    const startSearch = (gameSearch, plataforma, genero) => {
        const url = getGames(gameSearch, plataforma, genero); 
        fetch(url)
			.then(res => res.json())
			.then(data => {
                setDoneGamesFetch(true);
                setGamesList(data.results)  
            })
			.catch(err => console.log(err));
    }
 
    const searchGames = (e, plataforma, genero) => {
        if(e.type === 'keypress' && e.key !== 'Enter') return ; 
        const gameSearch = document.querySelector('#gameSearch').value.toLowerCase().trim(); 
        startSearch(gameSearch, plataforma, genero); 
    }

    const getGame = (idGame) => { 
        const url = getGameDetail(idGame); 
        fetch(url)
			.then(res => res.json())
			.then(data => { 
                console.log(data)
                setGameDetail(data)  
            })
			.catch(err => console.log(err));
    }

    return (
        <GamesContext.Provider value={{ getGames, doneGamesFetch, searchGames, gamesList, getGame, gameDetail }}>
            { children }
        </GamesContext.Provider>
    );
};

export default GamesContextProvider;