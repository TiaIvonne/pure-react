import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'



// tomo la prop todo y la transformo en un nuevo array que se llamara to
const TrelloList = ({todo})=> (
    <div className = 'card'>
        <div>
        {todo.map(to =>
            <Trello key={to.id} to={to} />
        )}
        </div>
    </div>
)

// el nuevo array lo toma Trello como una prop y con eso muestra la lista de tareas
function Trello({to}){
    return(
    <>
        <div>
            <div className="card-header">
                Cosas por hacer 
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item" >{to.task}</li>
                <li className="list-group-item">{to.done}</li>
            </ul>
        </div>
    </>
)
}


const load=[
        { 
            id: 1,
            task: "HTML I", 
            done: 'yes' 
        },
        { 
            id: 2,
            task: "CSS", 
            done: 'no' 
        },
        { 
            id: 3,
            task: "Responsive design",
            done: 'no' 
        },
 
];







ReactDOM.render(
    <TrelloList todo = {load}/>,
    document.getElementById('root')
)