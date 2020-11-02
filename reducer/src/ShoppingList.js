import React, { useReducer, useRef } from 'react';
import {v4 as uuidv4} from 'uuid'

// https://www.npmjs.com/package/uuid
// esta libreria de npm asigna un id unico a cada elemento que se este creando


// en este caso se escribio el reducer como una funcion independiente
// se puede hacer todo dentro pero es mejor por reusabilidad mantenerlo fuera 
// para esta caso tengo un caso add cuando agrego items y un remove 
const reducer = ((state, action) => {
    switch (action.type) {
      case "add":
        return [
          ...state,
          {
            id: uuidv4(),
            name: action.name,
          },
        ];
      case "remove":
        // conserva cada item con excepcion del que quiero quitar
        return state.filter((_, index) => index !== action.index);
      case "clear":
        // splice limpia el array completo y lo deja vacio
        // return state.splice(state.length);
        return []
      default:
        return state;
    }
})

// shopping list lo que se muestra en pantalla, con un uncontrolled form
export function ShoppingList() {
    const inputRef = useRef();
    // aqui llamamos al useReducerHook
    const [items, dispatch] = useReducer(reducer, []);
// al presionar enter activa este event handler y el despachador agrega 
    function handleSubmit(e){
        e.preventDefault();
        dispatch({
            type: 'add',
            name: inputRef.current.value
        })
        inputRef.current.value = ''
    }

    return (
      <>
        <form onSubmit={handleSubmit}>
          <input ref={inputRef} />
        </form>
        <ul>
          {/* despliega en pantalla lo agregado en el formulario */}
          {items.map((item, index) => (
            <li key={item.id}>
              {item.name}
              <button onClick={() => dispatch({ type: "remove", index })}>
                quitar
              </button>
            </li>
          ))}
          <button onClick={() => dispatch({ type: "clear"})}>
            clear shopping list
          </button>
        </ul>
      </>
    );
    
}
