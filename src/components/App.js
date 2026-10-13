
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateName, updateEmail } from "./redux/actions";

function App() {
  const { name, email } = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>User Information</h1>

      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => dispatch(updateName(e.target.value))}
        />
      </div>

      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => dispatch(updateEmail(e.target.value))}
        />
      </div>

      <div className="output">
        <p>Name - {name}</p>
        <p>Email - {email}</p>
      </div>
    </div>
  );
}

export default App;
