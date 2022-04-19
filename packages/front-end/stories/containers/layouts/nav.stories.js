import React from "react";
import Nav from '../../../components/containers/layouts/nav'

export default {
    title: 'containers/layouts/nav',
    component: Nav,
}

const Template = (args) => <Nav {...args}/>
export const navigation = Template.bind({});