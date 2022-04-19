import React from "react";
import TestButton from "../components/containers/layouts/Story/TestButton";

export default{
    title:'containers/layouts/Story/TestButton',
    component: TestButton,
}
const Template= (args)=><TestButton{...args}></TestButton>
export const Primary = Template.bind({})