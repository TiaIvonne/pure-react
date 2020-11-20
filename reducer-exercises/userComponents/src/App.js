import React, { useReducer } from 'react'
import './App.css';
import UserAge from './UserAge';
import UserGender from './UserGender';
import UserName from './UserName';

// si el componente no tiene el export default entonces lo llamo con {MathComplex}
// si al componente le agrego defautl al export entonces lo llamo sin {}


const initialUser = {
  name: '',
  age: '',
  gender: ''
}
const reducer = (state, action) => {
  switch(action.type){
    case 'userName':
      return {
        name: action.name,
        gender: '',
        age: ''
      }
    case 'userAge':
      return{
        ...state,
        age: action.age
      }
      case 'userGender':
        return{
          ...state, 
          gender: action.gender
        }
      default:
        return state
  }
}

export const UserContext = React.createContext()
function App() {
  const[user, dispatch] = useReducer(reducer, initialUser)
  return (
    <div className="App">
      <UserContext.Provider value={{ user, dispatch }}>
        <UserName />
        {user.name && <UserGender/>}
        {user.gender && <UserAge/>}
      </UserContext.Provider>
      {user.age && (
        <p>
          User name is <b>{user.name}</b> having gender <b>{user.gender}</b> of
          Age <b>{user.age}</b>
        </p>
      )}
    </div>
  );
}

export default App;
