import React from "react";
import PieChart from "../../../components/presentations/dashboards/PieChart";
export default {
    title : 'presentations/dashboards/PieChart',
    component : PieChart,
    
}
const Template = (args) => <PieChart {...args} />
export const piechart = Template.bind({});