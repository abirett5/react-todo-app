import React from "react";
import "./App.css"; // 19:17

const App = () => {
  const arr = [
    {
      id: 1,
      name: 'a',
    },
    {
      id: 2,
      name: 'b',
    }
  ];

  return (
    <div className="App">
      {
        // arr.map((num) => (
        //   <div>{num} ,</div>
        // ))

        // arr.filter((num) => num !== 3 )

        arr.map((num) => {
          return (
            <div key={num.id}>{num.name}</div>
          )
        })
      }
    </div>
  )
}

export default App
