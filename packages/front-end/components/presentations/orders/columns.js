const columns = [
<<<<<<< HEAD
    { id: 'avatar', minWidth: 50, label: "Profile" },
=======
    { id: 'id', minWidth: 50, label: "ID" },
    { id: 'profile', minWidth: 50, label: "Profile" },
    { id: 'code', minWidth: 50, label: "Code" },
>>>>>>> afffeda078a063df4a69b24d84bd9fa318d67087
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
<<<<<<< HEAD
    
=======
    { id: 'qty', minWidth: 50, label: "Qty" },
    { id: 'total', minWidth: 50, label: "Total" },
>>>>>>> afffeda078a063df4a69b24d84bd9fa318d67087
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