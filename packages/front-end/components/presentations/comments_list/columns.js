const columns = [
    { id: 'No', minWidth: 50, label: "No" },
    { id: 'name', minWidth: 50, label: "Name" },
    {
        id: 'phone',
        label: 'Phone',
        minWidth: 170,
        align: 'center',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'date',
        label: 'Date',
        minWidth: 170,
        align: 'center',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'comment',
        label: 'Comment',
        minWidth: 10,
        align: 'center',
        format: (value) => value.toLocaleString('en-US'),
    },
    { id: 'action', label: 'Action', minWidth: 100, align: 'left' },
];

export{ 
    columns
}