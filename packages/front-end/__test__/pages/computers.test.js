import { shallow } from 'enzyme'
import Computers from '../../pages/Testing/computers'
it('computers page',()=>{
    const wrapper = shallow(<Computers/>);
    expect(wrapper.find('h1').exists()).toBeTruthy();

})