import toDateFormat from './../../components/Utest/toDateFormat'
describe("covert to date format",()=>{
   it("has valid date format",()=>{
      const date = toDateFormat('2021-01-01T00:00:00.000Z');
      const match= /^([0-9]{2}-[A-Z][a-z]{2}-[0-9]{4})$/.test(date); //regular expression, test pattern
      console.log(date)
      expect(match).toBeTruthy();
   })
   
   it("input as null value",()=>{
      const date= toDateFormat(null);
      expect(date).toEqual('unvalid date');
   });

   it("input as undefined",()=>{
      const date = toDateFormat(undefined);
      expect(date).toEqual('unvalid date');
   });
   it("incorrect date format ",()=>{
      const date = toDateFormat("12-02");// 
      expect(date).toEqual('unvalid date');
   });

})





