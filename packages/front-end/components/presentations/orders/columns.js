const columns = [
    { id: 'avatar', minWidth: 50, label: "Name" },

    {
        id: 'payment',
        label: 'Payment',
        minWidth: 170,
        align: 'left',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'status',
        label: 'Status',
        minWidth: 170,
        align: 'center',
        format: (value) => value.toLocaleString('en-US'),
    },

    { id: 'action', label: 'Action', minWidth: 100, align: 'center' },
];

export{ 
    columns
}