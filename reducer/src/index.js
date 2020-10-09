import React, {Component}from 'react'
import ReactDOM from 'react-dom'
import {ShoppingList} from './ShoppingList.js'

class ReducerHook extends Component {
    render(){
        return(
            <ShoppingList/>
        )
    }

}

ReactDOM.render(<ReducerHook/>, document.getElementById('root'))

