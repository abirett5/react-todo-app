import React from "react";
import "./App.css";

const App = () => {
  const arr = [1, 2, 3, 4, 5];

  return (
    <div className="App">
      {
        // arr.map((num) => (
        //   <div>{num} ,</div>
        // ))

        arr.filter((num) => num !== 3 ) // continue from 13:57 (https://www.youtube.com/watch?v=PGlnnr22qj0&t=461s)
      }
    </div>
  )
}

export default App
