import React from 'react';
import ReactDOM from 'react-dom';
import { Fragment } from 'react';


function Main(){
    return(
    <>
    <MyThing/><Greeting/>
    </>
    )
}


function MyThing(){
    return(
    <div className ='book'>
        <div className = 'title'>
            The Title
        </div>
        <div className = 'author'>
            The Author
        </div>
        <ul className = 'stats'>
            <li className = 'isbn'>
                12-345678-910
            </li>
        </ul>
        <div>
            Newline
            test
        </div>
        <div>
        Empty

        Newlines

        Here
        </div>
        <div>
        &nbsp; Non-breaking
        &nbsp; Spaces&nbsp;
        </div>
        <div>
        Line1
        {' '}
        Line2
        </div>
    </div>
    )
}



//const  helloWorld = React.createElement('h1', {}, 'Hello World');

function Greeting(){
    let username = 'root'
    return(
        <div>
            {username === false ? 'Not logged in' : 'Hello, username'}
        </div>
    )
}

//esta funcion retornara error por no estar capitalizada
/*
function testComponent(){
    return <div>Hello tontos</div>
}
*/


function Table(){
    return (
    <table>
        <tbody>
            <tr>
            <Data/>
            </tr>
        </tbody>
    </table>
    )
}



function Data(){
    return (
        <>
        <Fragment>
          <th>Firstname</th>
          <th>Lastname</th>
          <th>Age</th>
          <td>Jill</td>
          <td>Smith</td>
          <td>50</td>
          <td>Eve</td>
          <td>Jackson</td>
          <td>94</td>
        </Fragment>
        </>
    )

}

ReactDOM.render(
    <Table/>,
    document.querySelector('#root')

)
