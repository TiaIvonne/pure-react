import React, { useState } from "react";
import {useInput} from './useInput'

//********** FORMULARIO QUE USA UN CUSTOM HOOK **********

export const FormCustomHooks = () => {
  //declaro el state inicial
  // const [data] = useState({small:'small', medium:'medium', large:'large'})
  const [size, setSize] = useInput("") 
  const [topping, setToping] = useInput("")
  const [glutenFree, setGlutenFree] = useState(false)
  const [text, setText] = useInput("")

  function handleSubmit(e) {
    e.preventDefault();
    alert(
      `Your order a ${size} pizza with ${topping} ${text} ${
        glutenFree ? "and gluten free" : ""
      }`
    );
    console.log(size);
  }
  return (
    <>
      <h1>Order your pizza with react custom hooks</h1>
      <h2>Size</h2>
      <form>
        <label>
          <input
            type="radio"
            value='small'
            onChange={setSize}
            checked={size === 'small'}
          />
          Small
        </label>
        <label>
          <input
            type="radio"
            value='medium'
            onChange={setSize}
            checked={size === 'medium'}
          />
          Medium
        </label>
        <label>
          <input
            type="radio"
            value='large'
            onChange={setSize}
            checked={size === 'large'}
          />
          Large
        </label>
        {/* select topping seccion */}
        <h2>Topping</h2>
        <select onChange={setToping} value={topping}>
          <option value="">- choose a topping -</option>
          <option value="pepperoni">Pepperoni</option>
          <option value="onion">Onion</option>
        </select>
        {/* checkbox button section*/}
        <div>
          <label>
            <input
              type="checkbox"
              checked={glutenFree}
              onChange={() => setGlutenFree(!glutenFree)}
            />
            Gluten free
          </label>
        </div>
        {/* Special instructions section */}
        <div>
          <h2>Special instructions</h2>
          <input
            type="text"
            value={text}
            placeholder="extra cheese"
            onChange={setText}
          />
        </div>
      </form>
      <button onClick={handleSubmit}>Submit</button>
    </>
  );
};
