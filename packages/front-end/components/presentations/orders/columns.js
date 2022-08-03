const columns = [
    { id: 'id', minWidth: 50, label: "ID" },
    { id: 'profile', minWidth: 50, label: "Profile" },
    { id: 'code', minWidth: 50, label: "Code" },
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
    { id: 'qty', minWidth: 50, label: "Qty" },
    { id: 'total', minWidth: 50, label: "Total" },
    {
        id: 'status',
        label: 'Status',
        minWidth: 170,
        align: 'center',
        format: (value) => value.toLocaleString('en-US'),
    },
    
    // {
    //     id: 'item',
    //     label: 'Item',
    //     minWidth: 170,
    //     align: 'center',
    //     format: (value) => value.toLocaleString('en-US'),
    // },


    { id: 'action', label: 'Action', minWidth: 100, align: 'center' },
];

export{ 
    columns
}