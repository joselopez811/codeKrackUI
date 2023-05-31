import React from "react";
import Popup from "reactjs-popup";
import { tsPropertySignature } from "@babel/types";
 
export default () => (
    
  <Popup trigger={<button> Trigger</button>} position="right center">
    <div><h1>Correct!!</h1></div>
  </Popup>
);