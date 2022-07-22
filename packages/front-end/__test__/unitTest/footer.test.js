import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Footer from '../../components/Func/footer';
describe(('Rendering Footer',()=>{
    it('snapshot',()=>{
        const wrapper = shallow(<Footer/>)
        expect (wrapper).toMatchSnapshot();
        console.log(toJson(wrapper))
    })
}))