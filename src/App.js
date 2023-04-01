import NotesContainer from "./components/NotesContainer";
import "./App.css";
import Sidebar from "./components/Sidebar";
import { useEffect, useState } from "react";
import { nanoid } from "nanoid";

function App() {
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem("notes-app")) || []
  );

  function addNote(color) {
    const tempNotes = [...notes];

    tempNotes.push({
      id: nanoid(),
      text: "",
      time: Date.now(),
      color,
    });

    setNotes(tempNotes);
  }

  function deleteNote(id) {
    const tempNotes = [...notes];

    const noteIndex = tempNotes.findIndex((note) => note.id === id);
    if (noteIndex < 0) return;

    tempNotes.splice(noteIndex, 1);
    setNotes(tempNotes);
  }

  useEffect(() => {
    localStorage.setItem("notes-app", JSON.stringify(notes));
  }, [notes]);

  return (
    <div className="App">
      <Sidebar addNote={addNote} />
      <NotesContainer notes={notes} deleteNote={deleteNote} setNotes={setNotes} />
    </div>
  );
}

export default App;
