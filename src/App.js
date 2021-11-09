import "./App.css";

function App() {
  return (
    <div id="container">
      <div className="App">
        <div id="title">
          <h1> Reactjs Todo List</h1>
        </div>

        <div id="showTodo">
          <div className="todo">❌ This is a sample TODO!</div>
          <div className="todo">❌ Vue</div>
          <div className="todo">❌ React</div>
        </div>

        <div id="input">
          <input />
          <button>Add</button>
        </div>
      </div>
    </div>
  );
}

export default App;
