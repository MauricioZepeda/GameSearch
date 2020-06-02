import React, { useContext } from 'react';
import ListGames from './ListGames';
import { GamesContext } from './../../contexts/GamesContext'; 
 
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

const SearchGames = ({plataforma, genero}) => {
    const { searchGames, gamesList  } = useContext(GamesContext);

    return(  
        <div style={{ width: '100%' }}> 
            <Box display="flex" justifyContent="center" m={2} p={1}> 
                <Box width='300px'>
                    <TextField
                        id="gameSearch"
                        label="Game" 
                        variant="outlined"                        
                        onKeyPress={ e => searchGames(e, plataforma, genero) }
                    />
                    <IconButton onClick={ e => searchGames(e, plataforma, genero) }>
                        <SearchIcon fontSize="large" />
                    </IconButton>
                </Box>  
            </Box>  
          
            {  (gamesList.length > 0) && <ListGames gamesList={gamesList} /> }  
          
        </div>  
    )
};

SearchGames.displayName = 'SearchGames'; 
export default SearchGames;