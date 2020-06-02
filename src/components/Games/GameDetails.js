import React  from 'react'; 
import Message from './../Common/Message'; 

const GameDetails = () => {  
    const idGame =  window.location.pathname.split('/')[2];
    return (    <Message text={`idgame: ${idGame}    |    No pude usar el GameContext para obtener los detalles de el juego desde acá con getGame =(`} />  );  
}
 
export default GameDetails;