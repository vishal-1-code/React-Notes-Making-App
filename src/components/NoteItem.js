

import React from 'react';

const NoteItem = ({ note, onDelete }) => {
  const { _id, title, content, timestamp } = note;

  return (
    <div className="note-item">
      <h3>{title}</h3>
      <p>{content}</p>
      <p>{new Date(timestamp).toLocaleString()}</p>
      <button onClick={() => onDelete(_id)}>Delete</button>
    </div>
  );
};

export default NoteItem;
