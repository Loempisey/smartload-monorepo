import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';

export default function SelectSmall() {
  return (
<<<<<<< HEAD
    <Box sx={{ minWidth: 60 }}>
      <FormControl fullWidth>
        <NativeSelect
          defaultValue={30}
        >
          <option value={10}>Paid</option>
=======
    <Box >
      <FormControl  style={{Width: "20px"}}>
        <NativeSelect
         
        >
          <option value={10} >Paid</option>
>>>>>>> afffeda078a063df4a69b24d84bd9fa318d67087
          <option value={20}>Unpaid</option>
        </NativeSelect>
      </FormControl>
    </Box>
  );
<<<<<<< HEAD
}
=======
}
>>>>>>> afffeda078a063df4a69b24d84bd9fa318d67087
