import React from "react";
import { Button } from "@material-ui/core";
import { fireStore } from "../../services/firebase";
const TestFireStore = () => {
  const students =[
    {
      name: "AB",
      age: 20,
    },
    {
      name: "BA",
      age: 30,
    },
  ]
  return ( 
    <div>
      {
        students.map((item, index)=>{
          return(
            <div>
              {/* <h1>{index+1}</h1> */}
              <span>{item.name + ":"}</span>
              <span>{item.age}</span>
              <Button color="primary">Click</Button>

            </div>
          )
        })
      }
    </div>
   );
}
export default TestFireStore;