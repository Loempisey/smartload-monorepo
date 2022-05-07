import React from "react";
import { RecoilRoot } from 'recoil'
import ChangUser from "../../../components/presentations/EditAccount/ChangUser";
export default{
    title : 'presentations/EditAccount/ChangUsername',
    component : ChangUser,
}
const Template = (args) => <RecoilRoot><ChangUser {...args} /></RecoilRoot>
export const changeuser = Template.bind({});