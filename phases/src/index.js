import React from 'react';
import ReactDOM from 'react-dom';

class ErrorCatcher extends React.Component { 
    
    state = { error: null }

    // ERROR HANDLING
    // este metodo es llamado cuando alguno de los hijos (child component) lanza un error dentro del constructor o durante
    // el render o en un lifecycle method (componentDidMount ej)
    // esto solo lanzara errores si es que algun children presenta problemas, no esta clase en si misma
    componentDidCatch(error, info) { 
        console.log('[componentDidCatch]', error); 
        this.setState({ error: info.componentStack });
    }
    render() 
        { if(this.state.error) {
        return ( 
            <div>
                An error occurred: {this.state.error} </div>
            ) 
        }

    return this.props.children; 
    }
}
console.log('MOUNTING')
class LifeCycleDemo extends React.Component {
    // ********** Mounting **********
    
    // includes constructor, componentDidMount and componentWillMount(deprecado)
    // hay que seguir usando el DidMount
    // Primero inicializa el state antes del constructor
    state = {counter: 0}
    // lo primero que se llama despues de inicializar el state
    constructor(props) {
        super(props);
        console.log('[constructor]');
        console.log(' State already set:', this.state);
    }

    // Called after initial render is done
    // Aqui es una buena idea conectar o realizar fetch a data o api's externas
    componentDidMount(){
        console.log('[componentDidMount]', 'Mounted.');
    }

    // ********** Rendering **********
    // componentWillReceiveProps(deprecado)
    // ** Make this static SI NO EL METODO NO FUNCIONA ** //
    // Se llama antes dle render inicial y cada vez que se reciben nuevas props,
    // no es muy utilizado
    // esto no toma el state, en vez de eso es mejor que devuelva un objeto que muestre los cambios en el estado

    static getDerivedStateFromProps(nextProps, prevState) {
        console.log('RENDERING')
        console.log('[getDerivedStateFromProps]'); 
        console.log(' Next props:', nextProps); 
        console.log(' Prev state:', prevState); 
        return null;
    };

    // Called before each render. Return false to prevent rendering.
    // This (and PureComponent) are the primary ways to optimize class components. 
    // If you notice performance is slow, measure with the profiler, then try implementing this method
    // to prevent needless renders. 
    // React is fast out of the box,and a few extra renders won't hurt. I wouldn't recommend
    // implementing this method unless you know you need it.

    shouldComponentUpdate(nextProps, nextState) {
        console.log('[shouldComponentUpdate]', 'Deciding to update'); 
        return true;
        // al cambiar a false el contador se actualiza en la consola y no en la pantalla 
    };

    // Called after render() but before updating the DOM
    // A good time to make calculations based on old DOM nodes.
    // The value returned here is passed into componentDidUpdate
    getSnapshotBeforeUpdate(nextProps, nextState) {
        console.log('[getSnapshotBeforeUpdate]', 'About to update...');
        return `Time is ${Date(Date.now()).toString()}`;
    }

    // ********** COMMIT *********
    // Se llama este metodo despues del render() y despues de actualizar el DOM
    // render/commit/update cycle done
    // This is a good time to check if a prop has changed,
    // by checking prevProps.whatever === this.props.whatever.
    // Useful for re-fetching data when a record ID changes.
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[componentDidUpdate]', 'Updated.');
        console.log('  snapshot:', snapshot);
    }

    // ********** UNMOUNT **********
    // antes de unmount el componente
    // tiempo de limpiar, se quitan event listeners, timers etc
    componentWillUnmount() {
        clearTimeout()
        console.log('[componentWillUnmount]', 'Goodbye cruel world.');
    }

    // funcion que aumenta el contador en 1
    handleClick = () => {
        this.setState({
            counter: this.state.counter + 1
        });
    };

    causeErrorNextRender = () => {
        // Set a flag to cause an error on the next render
        // This will cause componentDidCatch to run in the parent
        this.setState({
            causeError: true
        });
    };

    render(){
        console.log('[render]');
        if(this.state.causeError){
            throw new Error('no no nooooooo');
        }
        return(
            <div>
                <span>Counter: {this.state.counter}</span>
                <button onClick={this.handleClick}>
                    Click to increment
                </button>
                <button onClick={this.causeErrorNextRender}>
                    Throw an error
                </button>
            </div>
        );
    }
}

ReactDOM.render(
    <ErrorCatcher>
        <LifeCycleDemo/>
    </ErrorCatcher>,
    document.querySelector('#root')
);

