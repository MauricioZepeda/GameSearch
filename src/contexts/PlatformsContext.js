import React, { createContext, useState, useEffect } from 'react';
import { getPlatforms } from '../constants';

export const PlatformsContext = createContext();

const PlatformsContextProvider = ({ children }) => { 
    const [ donePlatformsFetch, setDonePlatformsFetch ] = useState(false);
    const [ platformsList, setPlatformsList ] = useState([]);
    const [ platform, setPlatform ] = useState(0)
     
    useEffect(() => getPlatformsList(), []); 

    const getPlatformsList = () => {
        fetch(getPlatforms())
			.then(res => res.json())
			.then(data => {
                setDonePlatformsFetch(true);
                setPlatformsList(data.results) 
            })
			.catch(err => console.log(err));
    }
 
    return (
        <PlatformsContext.Provider value={{ getPlatformsList, platformsList, platform, setPlatform, donePlatformsFetch }}>
            { children }
        </PlatformsContext.Provider>
    );
};

export default PlatformsContextProvider;