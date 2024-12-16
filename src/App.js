import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  reset,
  incrementByAmount,
} from "./features/Counter/counterSlice.jsx";
import "./App.css";

const App = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState(0);
  const [darkMode, setDarkMode] = useState(false);

  const toggleMode = () => {
    setDarkMode((prevMode) => !prevMode); // Toggle the mode
  };

  return (
    <div className={`app-wrapper ${darkMode ? "dark-mode" : "light-mode"}`}>
      {/* Navigation Bar */}
      <nav className="navbar">
        <span className="navbar-title">Counter Application</span>
        <button className="toggle-btn" onClick={toggleMode}>
          Switch to {darkMode ? "Light" : "Dark"} Mode
        </button>
      </nav>

      {/* Counter Section */}
      <div className="counter-container">
        <h1>Counter: {count}</h1>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <button onClick={() => dispatch(reset())}>Reset</button>
        <br />
        <br />
        <input
          type="number"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(Number(e.target.value))}
        />
        <button
          onClick={() => dispatch(incrementByAmount(Number(incrementAmount)))}
        >
          Increment by Amount
        </button>
      </div>

      {/* Footer */}
      <footer className="footer">
        <p>
          Counter Application &copy; {new Date().getFullYear()}. All rights
          reserved. The Fulsore
        </p>
      </footer>
    </div>
  );
};

export default App;
