const columns = [
  { id: 'name', label: 'Profile', minWidth: 150, },
  {
    id: 'location',
    label: 'Location',
    minWidth: 170,
    align: 'left',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'phone',
    label: 'Phone Number',
    minWidth: 170,
    align: 'center',
    format: (value) => value.toLocaleString('en-US'),
  },
  
  { id: 'code', label: 'Code Item ', minWidth: 100, align: 'right' },
];

export {
    columns
}

