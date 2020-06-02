import React, { createContext, useState, useEffect } from 'react';
import { getGenres } from './../constants';

export const GenresContext = createContext();

const GenresContextProvider = ({ children }) => { 
    const [ doneGenresFetch, setDoneGenresFetch ] = useState(false);
    const [ genresList, setGenresList ] = useState([]);
    const [ genre , setGenre ] = useState(0)

    useEffect(() => getGenresList(), []); 

    const getGenresList = () => {
        fetch(getGenres())
			.then(res => res.json())
			.then(data => {
                setDoneGenresFetch(true);
                setGenresList(data.results) 
            })
			.catch(err => console.log(err));
    }
 
    return (
        <GenresContext.Provider value={{ getGenresList, genresList, genre , setGenre, doneGenresFetch }}>
            { children }
        </GenresContext.Provider>
    );
};

export default GenresContextProvider;