import React, { useReducer } from "react";
import ReactDOM from "react-dom";
import "./index.css";



function Keypad({combo}) {
  const keypad = [1, 2, 3]

  return (
    
    <>
      {/* Despliega el boton con los numeros del 1 al 6 */}
        {keypad.map((index, value) =>{
          return(
            <button key={index}>{index}</button>

          )
        })}



    </>
  );
}

ReactDOM.render(<Keypad combo="567" />, document.querySelector("#root"));
