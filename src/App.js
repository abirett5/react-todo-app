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

        // arr.map((num) => {
        //   return (
        //     <div key={num.id}>{num.name}</div>
        //   )
        // })

        <div className="container">
          <h1>Todo List App</h1>
          <form className="todoForm">
            <input type="text" />
            <button>Go</button>
          </form>
          <ul className="allTodos">
            <li className="singleTodo">
              <span className="todoText">Learn React</span>
              <button>Edit</button>
              <button>Delete</button>
            </li>
          </ul>
        </div>
      }
    </div>
  )
}

export default App
