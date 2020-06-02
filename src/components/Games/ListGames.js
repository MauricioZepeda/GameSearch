import React from 'react';
import Game from './Game';
 
import { makeStyles } from '@material-ui/core/styles';  

const useStyles = makeStyles(() => ({
    root: { 
        display: 'flex', 
        flexDirection: 'row', 
        flexWrap: 'wrap',        
    } 
}));
  
const ListGames = ({gamesList}) => { 
    const classes = useStyles(); 
    return (  
         <div className={classes.root}>
            {gamesList.map(game => { 
                return (
                    <Game key={game.id} game={game} />
                )
            })} 
        </div>
    );
}
  

export default ListGames;