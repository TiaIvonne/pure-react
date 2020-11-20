import React, {useState, useContext} from 'react'
import {UserContext} from './App'

function UserName(){
    const {dispatch} = useContext(UserContext)

    const [userName, setName] = useState('')

    return(
        <div>
            <input type='text' placeholder='Name' value={userName} 
            onChange ={(e) => {setName(e.target.value)}} />
            <button type='button' onClick={() => dispatch({type: 'userName', name: userName})}>Next</button>
        </div>
    )
}

export default UserName