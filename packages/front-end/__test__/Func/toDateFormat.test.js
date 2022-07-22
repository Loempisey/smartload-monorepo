import { shallow } from "enzyme";
import toDateFormat from "../../components/Func/toDateFormat";

describe("convert date format",()=>{
    it("has valid date format",()=>{
        const date = toDateFormat('2009-09-09T00:00:00.000Z');
        console.log(date)
        const match =  /^([0-9]{2}-[A-Z][a-z]{2}-[0-9]{4})$/.test(date);
        expect(match).toBeTruthy();
    })
    it("input wrong format or none value",()=>{
        const date = toDateFormat(null);
        expect(date).toEqual('unvalid date')
    })
})