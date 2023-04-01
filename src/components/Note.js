import React from "react";
import "../styles/Note.css";

function Note({ note, id, deleteNote, notes, setNotes }) {
  function formatDate(value) {
    if (!value) return "";

    const date = new Date(value);
    const monthNames = [
      "Jan",
      "Feb",
      "March",
      "April",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sept",
      "Oct",
      "Nov",
      "Dec",
    ];

    let hrs = date.getHours();
    let amPm = hrs > 12 ? "PM" : "AM";
    hrs = hrs ? hrs : "12";
    hrs = hrs > 12 ? (hrs = 24 - hrs) : hrs;

    let min = date.getMinutes();
    min = min < 10 ? "0" + min : min;

    let day = date.getDate();
    const month = monthNames[date.getMonth()];

    return `${hrs}:${min} ${amPm} ${day} ${month}`;
  }

  function handleNoteChange(event) {
    const newText = event.target.value;
    const newNotes = notes.map((n) => {
      if (n.id === id) {
        return { ...n, text: newText };
      } else {
        return n;
      }
    });
    setNotes(newNotes);
  }

  return (
    <div className="note" style={{ backgroundColor: note.color }}>
      <textarea
        className="note-textarea"
        value={note.text}
        onChange={handleNoteChange}
        rows="4"
        cols="50"
      />
      <div className="note-footer">
        <p>{formatDate(note.time)}</p>
        <i className="fa-solid fa-trash" onClick={() => deleteNote(id)}></i>
      </div>
    </div>
  );
}

export default Note;
