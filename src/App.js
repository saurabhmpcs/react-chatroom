import "./App.css";

function App() {
  return (
    <div>
      <h1>User : {name}</h1>
      <div className="chat-container">
        <p className="chatbox">
          <strong> name: </strong>
          <span>chat message</span>
        </p>
      </div>
    </div>
  );
}

export default App;
