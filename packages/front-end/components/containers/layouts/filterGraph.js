import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect({duration, handleChange}) {
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl style={{ marginLeft:"145px",marginBottom:"10px"}} >
        <InputLabel id="demo-simple-select-label"
        style={{ marginLeft:"700px"}}>
          Duration</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={duration}
          label="Duration"
          onChange={handleChange}
          style={{
            width:"150px",
            marginLeft:"700px"}}
        >
          <MenuItem value="This week">This week</MenuItem>
          <MenuItem value="This month">This month</MenuItem>
          <MenuItem value="This year">This year</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
