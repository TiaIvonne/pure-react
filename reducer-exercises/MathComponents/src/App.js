import React from 'react'
import './App.css';
import  {MathComplex} from './MathComplex'
import MathComplex2 from './MathComplex2'
import {MathMultipleReducer} from './MathMultipleReducer'
// si el componente no tiene el export default entonces lo llamo con {MathComplex}
// si al componente le agrego defautl al export entonces lo llamo sin {}

function App() {
  return (
    <div className="App">
        <MathMultipleReducer/>
    </div>
  );
}

export default App;
