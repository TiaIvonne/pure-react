import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';



function Error({children}){
  return(
    <div className = 'error-box'>
      <i className="fa fa-exclamation-triangle" />
      <img alt='' src='favicon-16x16.png' />
      {children}
    </div>
  )
}




ReactDOM.render(
  <Error>Se viene el fin del mundo</Error>,
  document.getElementById('root')
);


