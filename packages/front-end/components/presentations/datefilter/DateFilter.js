import * as React from 'react';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export default function BasicDatePicker() {
  const [value, setValue] = React.useState(null);

  return (
    <div>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker style={{backgroundColor:"blue"}}
          label="From Date"
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
          
        />
      </LocalizationProvider><span> </span>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          label="To Date"
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
    </div>

  );
}
