import React from 'react';
import ReactDOM from 'react-dom';

// class OneTimeButton extends React.Component{
//     state = {
//         clicked:false
//     }

//     handleClick = () => {
//         this.props.onClick();
//         // no more clicking
//         this.setState({clicked:true})
//     }

//     render(){
//         return (
//             <button
//             onClick={this.handleClick}
//             disabled={this.state.clicked}
//             >
//                 You can click me once
//             </button>
//         );
//     }
// }


// la clase OneTimeButton ahora sera una funcion que permite cambios en el state con hooks

function OneTimeButton({onClick}) {
   
    // el useState como hook inicial toma el primer estado como un argumento (false)
    // y retorna un array con dos elementos, el estado actual y la funcion que cambia el estado
    // array destructuring const [clicked, setClicked]
    const [clicked, setClicked] = React.useState(false);
    console.log(clicked, setClicked)

    const handleClick= () =>{
        onClick();
        setClicked(true);
    };
    return (
        <button onClick={handleClick} disabled={clicked}>
            You can only click me once
        </button>
    )
}
ReactDOM.render(
    <OneTimeButton onClick={() => alert ('hi')}/>,
    document.querySelector('#root')
);