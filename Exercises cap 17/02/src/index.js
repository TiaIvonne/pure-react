import React, { useReducer } from 'react';
import ReactDOM from 'react-dom';


const reducer = (state, action) => {
  switch (action.type) {
    case 'next':
      return (state + 1) ;
    case 'off':
      return 0;
    default:
      return state;
  }
};

function Room() {
  const [level, dispatch] = useReducer(
    reducer,
    0
  );

  return (
    <>
      Lights are: {describeLightLevel(level)}
      <br />
      <button
        onClick={() => dispatch({ type: 'next' })}
      >
        Next
      </button>
      <button
        onClick={() => dispatch({ type: 'off' })}
      >
        Turn Off
      </button>
    </>
  );
}

function describeLightLevel(level) {
  switch (level) {
    case 0:
      return 'off';
    case 1:
      return 'low';
    case 2:
      return 'medium';
    case 3:
      return 'high';
    default:
      return 'broken';
  }
}

ReactDOM.render(
  <Room />,
  document.querySelector('#root')
);
