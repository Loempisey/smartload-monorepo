import React from 'react'
import Button from '../components/containers/layouts/Lesson/button'

export default {
    title: "Button",
    component: Button ,
}

const Template = args => <Button {...args} />
export const basic = Template.bind({})
basic.args = {
    backgroundColor: "red",
    label: "Press me",
    size: "md",
}




