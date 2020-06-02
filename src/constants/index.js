const cors_anywhere = 'https://cors-anywhere.herokuapp.com/';
const base_url = 'https://api.rawg.io/api/';
  
export const getGenres = () => `${ cors_anywhere }${ base_url }genres`;
export const getPlatforms = () => `${ cors_anywhere }${ base_url }platforms`;

export const getGames = (gameSearch, plataforma, genero) => {  
    const platform = (plataforma == 0) ? '' : `&platforms=${plataforma}`;
    const genre = (genero == 0) ? '' : `&genres=${genero}`;  
    return `${ cors_anywhere }${ base_url }games?search=${ gameSearch.trim() }${ platform }${ genre }`;    
}
export const getGameDetail = (id) => `${ cors_anywhere }${ base_url }games/${id}`;