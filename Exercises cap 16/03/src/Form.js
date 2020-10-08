import React, {Component} from 'react'



export class Form extends Component {
    state = {
        size: 'small',
        topping: '',
        glutenFree: false,
        text: ''
    }

    //funcion que captura y cambia el estado del boton tipo radio
    setSize = (event) => {
        this.setState({
            size: event.target.value
        })
    }

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

    render(){
        const {topping, text} = this.state
        return (
          <>
            <h1>Order your pizza</h1>
            <h2>Size</h2>
            <form>
              <label>
                <input
                  type="radio"
                  value="small"
                  checked={this.state.size === "small"}
                  onChange={this.setSize}
                />
                Small
              </label>
              <label>
                <input
                  type="radio"
                  value="medium"
                  checked={this.state.size === "medium"}
                  onChange={this.setSize}
                />
                Medium
              </label>
              <label>
                <input
                  type="radio"
                  value="large"
                  checked={this.state.size === "large"}
                  onChange={this.setSize}
                />
                Large
              </label>
              {/* select topping seccion */}
              <h2>Topping</h2>
              <select onChange={this.setTopping} value={topping}>
                <option value="">- choose a topping -</option>
                <option value="pepperoni">Pepperoni</option>
                <option value="onion">Onion</option>
              </select>
              {/* checkbox button section*/}
              <div>
                <label>
                  <input
                    type="checkbox"
                    checked={this.state.glutenFree}
                    onChange={this.setGlutenFree}
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
                  onChange={this.setText}
                />
              </div>
            </form>
            <button onClick={this.submitButton}>Place order</button>
          </>
        );
    }
}
