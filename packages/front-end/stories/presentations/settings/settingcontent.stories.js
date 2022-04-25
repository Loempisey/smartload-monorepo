import React from "react";
import SettingContent from "../../../components/presentations/settings/settingcontent";
import { RecoilRoot } from 'recoil'
export default{
    title : 'presentations/settings/settingcontent',
    component : SettingContent,
}
const Template = (args) => <RecoilRoot><SettingContent {...args}/></RecoilRoot>
export const settingcontent = Template.bind({});