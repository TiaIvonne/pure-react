// state as array
import React, {useState}from 'react'
import ReactDOM from 'react-dom'


// creo una funcion que mostrara por pantalla numeros al azar generados cada vez que pulse un boton
function RandomList(){
    // react hooks iniciado como un
    const [items, setItems] = useState([]);

    // esta funcion add Item, agrega el id y un valor a un nuevo array de elementos
    // el que despues sera mostrado cuando se pulse el boton add a number
    // en vez de hacer un for y agregar valores al array con el loop, se usa un
    // spread operator el cual 'to copy the existing items into the new array, and inserting the new item at the end.'
    const addItem = () => {
        setItems([
            ...items,
            {
                id: items.length,
                value: Math.round((Math.random() * 100), 0),
                texto: ' Soy un nuevo numero'
            }
            
        ])
        console.log(items)
    };

    // lo que se muestra en pantalla
    return (
        <>
            <button onClick = {addItem}>Add a number</button>
            <ul>
                {items.map(item => (
                    <li key={item.id}>{item.value}{item.texto}</li>
                ))}
            </ul>
        </>
    )
}

ReactDOM.render(
    <RandomList/>,
    document.getElementById('root')
)