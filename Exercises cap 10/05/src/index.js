import React from 'react';
import ReactDOM from 'react-dom';
import data from './data.js';


// este ejercicio es un poco diferente, en vez de generar la lista en el primer componente, la genero en Data
// data es un json que tiene datos de diferentes post de hacker news
// const HackerList = () => (
//     <div className = 'App'>
//         <Data/>
//     </div>
// )

// const Data = () => (
//     <>
//     {data.map(d =>(
//         <>
//             <div className='container'>
//                 <table class="table table-striped">
//                     <thead>
//                         <tr>
//                             <th scope="col">#</th>
//                             <th scope="col">{d.title}</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         <tr>
//                             <th scope="row">1</th>
//                             <td>{d.url} | {d.score} | {d.type} | {d.kids[0]}</td>
//                         </tr>
//                     </tbody>
//                 </table>
//             </div>
//         </>
//     ))}
//     </>
// )



// forma 2
const List =()=> (
    <>
    {data.map(d =>(
        <Table key={d.id} d={d}/>
    ))}
    </>

);

const Table =({d})=>(
    <div className = 'container'>
    <table class="table table-striped">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">{d.title}</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="row">1</th>
                <td>{d.url} {d.score} {d.type} </td>
            </tr>
        </tbody>
    </table>
    </div>
)




ReactDOM.render(
    <List/>,
    document.getElementById('root')
)