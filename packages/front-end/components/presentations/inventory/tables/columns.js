const columns = [
  { id: 'name', label: 'Name', minWidth: 150, },
  { id: 'image', label: 'Image', minWidth: 150, },
  {
    id: 'price',
    label: 'Price',
    minWidth: 170,
    align: 'left',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'description',
    label: 'Description',
    minWidth: 170,
    align: 'center',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'qty',
    label: 'Qty',
    minWidth: 170,
    align: 'center',
    format: (value) => value.toLocaleString('en-US'),
  },
  
  { id: 'category', label: 'Category ', minWidth: 100, align: 'center' },
  { id: 'action', label: 'Action ', minWidth: 100, align: 'center' },
];

export {
    columns
}

