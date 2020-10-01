import React from 'react'
import ReactDOM from 'react-dom'


class GoodExample extends React.Component{
    state = {
        data: this.props.data,
        dato: 1
    }

    render(){
        return(
            <div>
                The data: {this.state.dato}
            </div>
        )
    }
}

ReactDOM.render(
    <GoodExample/>,
    document.getElementById('root')
)