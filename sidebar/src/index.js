
import React, { Component } from 'react'
import ReactDOM from 'react-dom'

// el componente padre Layout maneja el estado true false del sidebar
// el estate inicial es falso 
class Layout extends Component {
    state = {
        showSideBar: false
    }

    // toggleSidebar cambia el estate de showSidebar cuando sea invocado
    toggleSidebar = () => {
        this.setState({
            showSideBar: !this.state.showSideBar
        });
    }

    render(){
        const {showSideBar} = this.state;
        return(
            <div className='container'>
                <div className = 'sidebar'>
                {showSideBar &&
                    <Sidebar
                        onHide={this.toggleSidebar}>
                        <ul>
                            <li>Menu</li>
                            <li>About</li>
                        </ul>
                    </Sidebar>}
                </div>
                <Content 
                isSidebarVisible={showSideBar}
                onShowSidebar={this.toggleSidebar}>
                    esto es un sidebar 
                </Content>
            </div>
        )
    }
}

const Content = ({
    children,
    isSidebarVisible,
    onShowSidebar
}) => (
    <div className = 'content'>
        {children}
        {!isSidebarVisible && (
            <button onClick={onShowSidebar}>
                Show
            </button>
        )}
    </div>
);

// este componente habilita el boton del sidebar 
const Sidebar = ({
    onHide,
    children
}) =>(
    <div className = 'sidebar'>
        {children}
        <button onClick={onHide}>
            Hide
        </button>
    </div>
)








ReactDOM.render(
    <Layout/>,
    document.getElementById('root')
)