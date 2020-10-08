import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {Forms} from './Forms.js'
import {FormCustomHooks} from './FormCustomHooks.js'
/*
class Example extends Component {
    state={
        letter: ''
    };

    setLetter = (event)=>{
        this.setState({
            letter: event.target.value
        });
        console.log(event)
    }
    render(){
        const {letter} = this.state;
        return(
            <form>
                <input
                    type='radio'
                    value='a'
                    checked={letter === 'a'}
                    onChange={this.setLetter}
                />
                <input
                    type='radio'
                    value='b'
                    checked={letter === 'b'}
                    onChange={this.setLetter}
                />
                <input
                    type='radio'
                    value='c'
                    checked={letter === 'c'}
                    onChange={this.setLetter}
                />
            </form>
        );
    }
}

*/

class Examples extends Component{
    render(){
        return(
        <>
        <div>Order Your Pizza HOOKS</div>
        <FormCustomHooks/>
        </>
        )
    }
}
ReactDOM.render(
    <Examples/>,
    document.getElementById('root')
)
