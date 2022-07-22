
import {atom} from 'recoil'

const COUNT = atom({
    key:'COUNT',
    default:0
})
const QUERY = atom({
    key:'SEARCH_KEY',
    default:'Pisey'
})
export{
    
    COUNT,
    QUERY,
}