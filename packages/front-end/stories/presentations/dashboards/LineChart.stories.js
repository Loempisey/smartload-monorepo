import React from "react";
// import { RecoilRoot } from 'recoil'
import LineChart from "../../../components/presentations/dashboards/LineChart";
export default{
    title : 'presentations/dashboards/LineChart',
    component : LineChart,
    
}
const Template = (args) => <LineChart {...args} />
export const linechart = Template.bind({});