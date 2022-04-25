import React from "react";
import ChangEmail from "../../../components/presentations/EditAccount/ChangEmail";
import { RecoilRoot } from 'recoil'
export default{
    title : 'presentations/EditAccount/ChangEmail',
    component : ChangEmail,
}
const Template = (args) => <RecoilRoot><ChangEmail {...args} /></RecoilRoot>
export const changemail = Template.bind({});