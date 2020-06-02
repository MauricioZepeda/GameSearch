import React, { useContext } from "react";
import { PlatformsContext } from './../../contexts/PlatformsContext';
 
import Box from '@material-ui/core/Box';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';  
import Select from '@material-ui/core/Select';

const SelectPlatforms = ({setPlataforma}) => {
  const { platformsList, setPlatform, platform } = useContext(PlatformsContext); 

  const handlerChange = (e) => {
    const platformSelected = e.target.value;
    setPlatform(platformSelected);
    setPlataforma(platformSelected); 
  }
 
  return (  
    <div style={{ width: '100%' }}> 
      <Box display="flex" justifyContent="center" m={2} p={1}> 
        <Box width='300px'>
          <InputLabel id="demo-simple-select-label">Platform</InputLabel>
          <Select 
            id="platform"
            fullWidth
            value={platform}
            onChange={handlerChange}
          >
            <MenuItem value='0'>All</MenuItem>
            { platformsList.map(p =>(<MenuItem key={p.id} value={p.id}>{p.name}</MenuItem>))}  
          </Select>
        </Box> 
      </Box>
    </div> 
  );
}; 

export default SelectPlatforms;
