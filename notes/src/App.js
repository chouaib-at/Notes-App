import "./App.css";
import { useState } from "react";
function App() {
  const [notes, setNotes] = useState([
    {
      id: 1,
      title: "title1",
      content: "content 1",
    },
    {
      id: 2,
      title: "title2",
      content: "content 2",
    },
    {
      id: 3,
      title: "title3",
      content: "content 3",
    },
  ]);

  return (
    <div className="app-container">
      <form className="note-form">
        <input placeholder="content"></input>
        <textarea placeholder="content" rows={10}></textarea>
        <button type="submit">Add Note </button>
      </form>
      <div className="notes-grid">
        {notes.map((note) => (
          <div className="note-item">
            <div className="notes-header">
              <button>x</button>
            </div>
            <h2>{note.title}</h2>
            <p>{note.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
