import React from "react";
import Note from "./Note";
import "../styles/NoteContainer.css";

function NotesContainer({ notes, deleteNote, setNotes }) {
  return (
    <div className="note-container">
      <h2>Notes</h2>
      <div className="note-container-notes custom-scroll">
        {notes.length > 0 ? (
          notes.map((note, i) => (
            <Note
              key={note.id}
              note={note}
              deleteNote={deleteNote}
              id={note.id}
              notes={notes}
              setNotes={setNotes}
            />
          ))
        ) : (
          <h3>No Notes Present</h3>
        )}
      </div>
    </div>
  );
}

export default NotesContainer;
