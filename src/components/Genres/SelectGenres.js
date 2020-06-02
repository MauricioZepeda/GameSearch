import React, { useContext } from "react";
import { GenresContext } from './../../contexts/GenresContext';
 
import Box from '@material-ui/core/Box';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';  
import Select from '@material-ui/core/Select';

const SelectGenres = ({setGenero}) => {
  const { genresList, genre , setGenre } = useContext(GenresContext); 

  const handlerChange = (e) => {
    const genreSelected = e.target.value;
    setGenre(genreSelected);
    setGenero(genreSelected); 
  }

  return ( 
    <div style={{ width: '100%' }}> 
      <Box display="flex" justifyContent="center" m={2} p={1}> 
        <Box width='300px'>
          <InputLabel id="demo-simple-select-label">Genre</InputLabel>
          <Select    
            id="genre"
            fullWidth
            value={genre}
            onChange={handlerChange} 
          >
            <MenuItem value='0'>All</MenuItem>
            { genresList.map( g =>(<MenuItem key={g.id} value={g.id}>{g.name}</MenuItem>))}  
          </Select>
        </Box> 
      </Box>
    </div>  
  );
}; 

export default SelectGenres;
