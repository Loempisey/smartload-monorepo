
import React, { Component } from "react";
import TableInventory from "../../../../components/presentations/inventory/tables/tableinventory";
export default{
    title : 'presentations/inventory/tables/tableinventory',
    component : TableInventory,
}
const Template = (args)=><TableInventory {...args}/>;
export const Table = Template.bind({});