import React from "react";
import { RecoilRoot } from 'recoil'
import ChangPass from "../../../components/presentations/EditAccount/ChangPass";
export default{
    title : 'presentations/EditAccount/ChangPassword',
    component : ChangPass,
}
const Template = (args) => <RecoilRoot><ChangPass {...args} /></RecoilRoot>
export const changepassword = Template.bind({});