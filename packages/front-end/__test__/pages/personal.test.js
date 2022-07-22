import { shallow } from 'enzyme'
import Personal from '../../components/Personal/personal';
describe('Personal Information',()=>{
    it('Wrap Container by div',()=>{
        const wrapper = shallow(<Personal/>);
        expect(wrapper.find('div').exists()).toBeTruthy();
    });
    it('Personal Info',()=>{
        const wrapper = shallow(<Personal/>);
        expect(wrapper.find('h2').exists()).toBeTruthy();
        expect(wrapper.find('h2').text()).toEqual("Personal Info");
    });
    it('Personal ID:',()=>{
        const wrapper = shallow(<Personal/>);
        expect(wrapper.find('[id="per-id"]').exists()).toBeTruthy();
        expect(wrapper.find('[id="per-id"]').text()).toEqual(" Id: 001");
    });
    it('Username:',()=>{
        const wrapper = shallow(<Personal/>);
        expect(wrapper.find('[id="username"]').exists()).toBeTruthy();
        expect(wrapper.find('[id="username"]').text()).toEqual(" Username: Piseyloem");
    });
    it('Email:',()=>{
        const wrapper = shallow(<Personal/>);
        expect(wrapper.find('[id="email"]').exists()).toBeTruthy();
        expect (wrapper.find('[id="email"]').text()).toEqual(" Email: loempisey@gmail.com");
    })
   
    it('Address:',()=>{
        const wrapper = shallow(<Personal/>);
        expect(wrapper.find('[id="add"]').exists()).toBeTruthy();
        expect(wrapper.find('[id="add"]').text()).toEqual(" Address: Battambang");
    });





})