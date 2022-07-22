import toJson from 'enzyme-to-json'
import { shallow } from 'enzyme'
import {LinearProgression, LinearProgressionWithLabel} from '../../components/progressions';
import {LinearProgressionWithLabel} from '../../components/progressions/LinearWithLabel'
describe('Linear Progression', ()=>{
    it("snapshot linear",()=>{
        const wrapper = shallow(<LinearProgression/>)
        console.log(wrapper)
        expect(toJson(wrapper)).toMatchSnapshot();

    });
    it("show linear Progression",() =>{
        const wrapper = shallow(<LinearProgression show={true}/>)
        expect(wrapper.find('LinearProgressionWithLabel').exists()).toBeTruthy();


    });
    it("hide linear progression",()=>{
        const wrapper = shallow(<LinearProgression show={false}/>)
        expect(wrapper.find('LinearProgressionWithLabel').exists()).toBeFalsy();
    });
})





