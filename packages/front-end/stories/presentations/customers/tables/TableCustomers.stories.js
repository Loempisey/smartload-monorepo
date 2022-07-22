
import React, { Component } from "react";
import TableCustomers from "../../../../components/presentations/customers/tables/tablecustomer";
export default{
    title : 'presentations/customers/tables/TableCustomers',
    component : TableCustomers,
}
const Template = (args)=><TableCustomers {...args}/>;
export const Table = Template.bind({});