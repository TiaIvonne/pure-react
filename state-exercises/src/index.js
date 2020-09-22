
import React from 'react'
import ReactDOM from 'react-dom'

// inicializa el evento, cada vez que el boton sea pulsado entonces se generara en la consola el mensaje 
// creo una funcion de tipo Parent que desplegara el elemento Child (child contiene el boton)
// Parent debera registrar cuantas veces handleAction ha sido llamado
// como necesitamos contabilizar y realizar cambios en nuestro boton entonces utilizo una de las dos formas para utilizar 
// state: Con clases o hooks. Para este ejercicio usamos Class
class CountingParent extends React.Component{
    // inicializo el constructor
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         actionCount: 0,
    //         reset: 0
    //     };
    //     this.handleAction = this.handleAction.bind(
    //         this
    //     )
    // }

    // en vez de utilizar la palabra constructor utilizare property initializer, con esto el constructor se va y es mas 
    //simple de leer y no necesito bind

    state ={
        actionCount: 0
    }

    /* esta funcion actualiza el state y re renderiza el componente, ademas agrega el contador */
    /* the set state function es en realidad asincrona */
    /* si quiero que el set state actualice inmediatamente el estado de los clicks debo refactorizar */
    /*los handlers se escriben como una arrow function, esto signific que retiene la propediad de this y no es necesario usar 
    bind */
    handleAction = (action) => {
        console.log('Child did', action)
        // this.setState({
        //     actionCount:
        //     this.state.actionCount + 1 
        // })
        
        /*
        el set state inicial de arriba es la funcion clasica, ahora la voy a refactorizar para que cada vez que haga click 
        vaya actualizando de forma sincrona, a this.setState le paso una callback function y retorno un valor
        */
        // en lo posible utilizar setState as a functional set state como el ejemplo de abajo
        this.setState((state, props) => {
            return {
                actionCount: this.state.actionCount + 1,
            }
        });
        console.log(this.state)
    }

    /* Esta funcion vuelve el contador a 0, se utiliza en el boton reset , */
    reset = (event) => {
        console.log('dah', event);
        this.setState({
            actionCount: 0
        });
        console.log(event)
    }

    // lo que se muestra por pantalla mas la funcion que contabiliza las veces que se ha hecho click
    render(){
        return (
            // <div>
            // <Child onAction={this.handleAction}/>            
            // <p>Clicked {this.state.actionCount} times </p>
            // </div>
            <div>
                <ChildWithResetButton
                onAction={this.handleAction}
                onRes={this.reset}
                />
                <p>Clicked {this.state.actionCount} times </p>
            </div>
        )
    }
}
// contiene nuestro boton
function Child({onAction}){
    return(
        <button onClick={onAction}>
            Click me!
        </button>
    )
}

// contiene ambos botones y se trae las props la clase Parent 
// debo traerme las props porque contiene 
class ChildWithResetButton extends React.Component {
    alertParent = () => {
        this.props.onAction('He sido clickeado');
    }
    render(){
        return(
        <div>
            <button onClick={this.alertParent}>Click Me!</button>
            <button onClick={this.props.onRes}>Reset </button>
        </div>
        )
    }
}


const Page = () => (
    <div>
        <CountingParent/>
        <CountingParent />
        <CountingParent />
    </div>
)

ReactDOM.render(
    <Page/>,
    document.getElementById('root')
)