import React, { useState, useContext } from "react";
import { UserContext } from "./App";

function UserAge() {
  const [age, setAge] = useState("");
  const { user, dispatch } = useContext(UserContext);
  return (
    <div>
      <h2>age value for user {user.name}</h2>
      <input
        type="text"
        placeholder="age"
        value={age}
        onChange={(e) => {
          setAge(e.target.value);
        }}
      />

      <button
        type="button"
        onClick={() => dispatch({ type: "userAge", age: age })}
      >
        Submit
      </button>
    </div>
  );
}

export default UserAge;
