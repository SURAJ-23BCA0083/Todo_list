import { createContext } from "react";
import { useState } from "react";

export const todocontext = createContext(null);


const Wrapper = (props) => {
     const [todos, settodos] = useState([]);
     
  return (
    
      <todocontext.Provider value = {[todos, settodos]}>
          {props.children}
     </todocontext.Provider> 
    
  )
}

export default Wrapper;