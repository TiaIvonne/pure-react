// import statements 
import React from 'react'; /*crea una nueva variable llamada React que contiene el modulo de react */
import ReactDom from 'react-dom'; /* esto es lo mismo que si react estuviese en node js =>const React = require ('react')*/


// functional components, or stateless function components
// hay diversas formas de crear componentes pero para estos fines se crearan componentes como funciones.
function HelloWorld(){
    return (
        <div>
          <ValidIndicator/>
        </div>
    )
}

// component 1
function Hello(){
    return <span>Hello</span>;
}
function World(){
    return <span>World</span>
}

function NameCells(){
    return (
 
    {/*
        <>
        <table>
            <td>First Name</td>
            <td>Last Name</td>
        </table>
        </>
    */}
    )
}

function ValidIndicator(){
    const num = 5;
    return (
        <span>
            {num > 0 ? 'lo es ': 'no lo es '}
        </span>
    )
}
/*puedo crear elementos con react create element o usar JSX, la forma mas natural en react es usar JSX'*/


ReactDom.render(
    <HelloWorld/>, /*react element*/
    document.querySelector('#root') /*DOM element*/
);