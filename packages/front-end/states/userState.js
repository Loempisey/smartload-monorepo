import {atom} from 'recoil'

const USERSTATE =atom({
    key:'USERSTATE',
    default:null,
})
const LOADINGSTATE=atom({
    key:'LOADINGSTATE',
    default:true
})
export{
    USERSTATE,
    LOADINGSTATE,
}