
import React from 'react';

function NoteList({ notes, onUpdate, onDelete }) {
  return (
    <div className="note-list">
      {notes.map(note => (
        <div className="note" key={note.id}>
          <h3>{note.title}</h3>
          <p>{note.content}</p>
          <small>Created at: {new Date(note.createdAt).toLocaleString()}</small><br />
          <small>Last modified: {new Date(note.updatedAt).toLocaleString()}</small><br />
          <button onClick={() => onDelete(note.id)}>Delete</button>
          <button onClick={() => {
            const newTitle = prompt('New title:', note.title);
            const newContent = prompt('New content:', note.content);
            if (newTitle !== null && newContent !== null) {
              onUpdate({ ...note, title: newTitle, content: newContent });
            }
          }}>
            Edit
          </button>
        </div>
      ))}
    </div>
  );
}

export default NoteList;
