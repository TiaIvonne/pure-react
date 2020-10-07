import React, {useState} from 'react'



export const Forms = () => {
    const [size, setSize] = useState({small:'small', medium:'medium', large: 'large'})
   

    //funcion que captura y cambia el estado del boton tipo radio
    const handleSize = (event) => {
            setSize(event.target.value)
    }

    /*
    setTopping = (event) => {
        this.setState({
            topping: event.target.value
        })
    }

    setGlutenFree = event => {
        this.setState({
            glutenFree: event.target.checked
        })
    }

    setText = event => {
        this.setState({
            text: event.target.value
        })
    }

    submitButton = event => {
        event.preventDefault();
        const {size,glutenFree, topping,text} = this.state
        alert(`Your order a ${size} pizza with ${topping} ${text} ${glutenFree ? 'and gluten free':''}`)
    }
    */

        return(
        <>
        <h1>Order your pizza</h1>
        <h2>Size</h2>
        <form>
           <label>
                <input
                    type='radio'
                    value='small'
                    onChange={handleSize}
                    checked={size === 'small'}
                />
                Small
            </label>
            <label>
                <input
                    type='radio'
                    value='medium'
                    onChange={handleSize}
                    checked={size === 'medium'}
                />
                Medium
            </label>
            <label>
                <input
                    type='radio'
                    value='large'
                    onChange={handleSize}
                    checked={size === 'large'}
                />
                Large
            </label>
        </form>
            <button>Place order</button>
        </>
        )
    }

