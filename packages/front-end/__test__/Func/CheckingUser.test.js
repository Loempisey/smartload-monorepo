import { shallow } from "enzyme";
import CheckingUser from "../../components/Func/CheckingUser";
it("User Info",()=>{
    const wrapper=shallow(<CheckingUser/>);
    expect(wrapper.find('[id="name"]').exists()).toBeTruthy();
    expect(wrapper.find('[id="name"]').text()).toEqual("Username: Chhenglee");

    expect(wrapper.find('[id="id"]').exists()).toBeTruthy();
    expect(wrapper.find('[id="id"]').text()).toEqual("Id: 168");

    expect(wrapper.find('[id="email"]').exists()).toBeTruthy();
    expect(wrapper.find('[id="email"]').text()).toEqual("Email: vengchhenglee@gmail.com");
    
    expect(wrapper.find('[id="address"]').exists()).toBeTruthy();
    expect(wrapper.find('[id="address"]').text()).toEqual("Address: #41,St168,Sangkat BoeungkakII,Khan Toulkok,Phnom Penh");
    
    
    
})