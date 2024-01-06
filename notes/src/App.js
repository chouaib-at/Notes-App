import "./App.css";

function App() {
  return (
    <div className="app-container">
      <form className="note-form">
        <input placeholder="content"></input>
        <textarea placeholder="content" rows={10}></textarea>
        <button type="submit">Add Note </button>
      </form>
      <div className="notes-grid">
        <div className="note-item">
          <div className="notes-header">
            <button>x</button>
          </div>
          <h2>Title</h2>
          <p>Note content</p>
        </div>
      </div>
    </div>
  );
}

export default App;
