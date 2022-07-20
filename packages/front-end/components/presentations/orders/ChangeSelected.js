import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';

export default function SelectSmall() {
  return (
    <Box >
      <FormControl  style={{Width: "20px"}}>
        <NativeSelect
         
        >
          <option value={10} >Paid</option>
          <option value={20}>Unpaid</option>
        </NativeSelect>
      </FormControl>
    </Box>
  );
}
