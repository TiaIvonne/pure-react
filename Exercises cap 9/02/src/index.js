import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


// solo muestra el primer elemento del array
function FirstChildOnly({children}){
  let items = React.Children.toArray(children);
  let first = items.slice(0,1);


  return(
    <>
    <div className = 'error-box'>
      {first}
    </div>
    </>
  )
}

// solo muestra el ultimo elemento del array
function LastChildOnly({children}){
  let items = React.Children.toArray(children);
  let last = items.slice(-1);
  return(
    <>
    <div className = 'error-box'>
      {last}
    </div>
    </>
  )
}

function Head({item, children}){
  return(
      <div>{item.number}</div>
  )
}


const test = {
  number: 3
}





ReactDOM.render(

  <Head item={test} />,
  document.getElementById('root')
);


{/* <LastChildOnly>{'banana'} {'orange'} {'apple'}</LastChildOnly>, */ }