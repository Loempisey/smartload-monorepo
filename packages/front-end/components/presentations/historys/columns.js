const columns = [
    { id: 'avatar', minWidth: 50, label: "Profile" },
    {
        id: 'date',
        label: 'Date',
        minWidth: 170,
        align: 'center',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'price',
        label: 'Price',
        minWidth: 170,
        align: 'center',
        format: (value) => value.toLocaleString('en-US'),
    },
    { id: 'action', label: 'Action', minWidth: 100, align: 'center' },
];

export{ 
    columns
}