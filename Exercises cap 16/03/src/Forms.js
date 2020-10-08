import React, {useState} from 'react'

// Mismo formulario que Form.js pero esta vez con Hooks en vez de clases

export const Forms = () => {
    //declaro el state inicial
    const [size, setSize] = useState({small:'small', medium:'medium', large: 'large'})
    const[topping, setTopping] = useState('choose a topping')
    const [glutenFree, setGlutenFree] = useState(false)
    const [text, setText] = useState('')

    //funcion que captura y cambia el estado del boton tipo radio
    const handleSize = (event) => {
        setSize(event.target.value)
    }

    // funcion que captura lo seleccionado en select element
    const handleTopping = (event) => {
        setTopping(event.target.value)
    }
    
    const handleGlutenFree = event => {
        setGlutenFree(event.target.checked)
    }
    
    const handleText = event => {
        setText(event.target.value)
    }
    
    const submitButton = event => {
        event.preventDefault();
        alert(`Your order a ${size} pizza with ${topping} ${text} ${glutenFree ? 'and gluten free':''}`)
    }
    

        return (
          <>
            <h1>Order your pizza with react hooks</h1>
            <h2>Size</h2>
            <form>
              <label>
                <input
                  type="radio"
                  value="small"
                  onChange={handleSize}
                  checked={size === "small"}
                />
                Small
              </label>
              <label>
                <input
                  type="radio"
                  value="medium"
                  onChange={handleSize}
                  checked={size === "medium"}
                />
                Medium
              </label>
              <label>
                <input
                  type="radio"
                  value="large"
                  onChange={handleSize}
                  checked={size === "large"}
                />
                Large
              </label>
              {/* select topping seccion */}
              <h2>Topping</h2>
              <select onChange={handleTopping} value={topping}>
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
                    onChange={handleGlutenFree}
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
                  onChange={handleText}
                />
              </div>
            </form>
            <button onClick={submitButton}>Place order</button>
          </>
        );
    }

