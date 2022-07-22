import React from "react";
import OrderTable from "../../../components/presentations/orders/ordertable";
export default {
    title : 'presentations/orders/ordertable',
    component : OrderTable,
}
const Template = (args) => <OrderTable {...args}/>
export const ordertable = Template.bind({});