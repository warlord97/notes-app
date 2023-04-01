import React, { useState } from "react";
import "../styles/Sidebar.css";

function Sidebar({ addNote }) {
  const colors = ["#fe9b72", "#fec971", "#00d4fe", "#b693fd", "#e4ee91"];

  const [listOpen, setListOpen] = useState(false);

  return (
    <div className="sidebar">
      <i
        className="fa-solid fa-circle-plus"
        onClick={() => setListOpen(!listOpen)}
      ></i>
      <ul className={`sidebar-list ${listOpen ? "sidebar-list-active" : ""}`}>
        {colors.map((item, index) => (
          <li
            key={index}
            className="sidebar-list-item"
            style={{
              backgroundColor: item,
            }}
            onClick={()=>addNote(item)}
          />
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
