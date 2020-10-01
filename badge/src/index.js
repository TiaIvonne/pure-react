import React, { Component } from 'react'
import ReactDOM from 'react-dom'


class Badge extends Component {
    constructor(props){
        super(props)
        this.state ={
            animating: true
        }
    }

    componentDidUpdate(oldProps){
        if(this.props.counter !== oldProps.counter){
            this.setState({animating: true}, () => {
                setTimeout(()=>
                {
                    this.setState({animating:false})
                }, 200)
            })
        }
    }

    render(){
        const animatingClass = this.state.animating ? 'animating' : '';
        return(
            <div className={`badge ${animatingClass}`}>
                {this.props.counter}
            </div>
        )
    }



}

ReactDOM.render(
    <Badge/>,
    document.getElementById('root')
)