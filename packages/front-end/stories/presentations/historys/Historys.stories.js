import React from "react";
import Historys from "../../../components/presentations/historys/history";
export default {
    title : 'presentations/historys/history',
    component : Historys,
}
const Template = (args) => <Historys {...args}/>
export const history = Template.bind({});