
import React, { useState, useEffect } from 'react';

function NoteForm({ onCreate, noteToEdit, onUpdate }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    if (noteToEdit) {
      setTitle(noteToEdit.title);
      setContent(noteToEdit.content);
    }
  }, [noteToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (noteToEdit) {
      onUpdate({ ...noteToEdit, title, content });
    } else {
      onCreate({ title, content });
    }
    setTitle('');
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Title" 
        value={title} 
        onChange={(e) => setTitle(e.target.value)} 
        required 
      />
      <textarea 
        placeholder="Content" 
        value={content} 
        onChange={(e) => setContent(e.target.value)} 
        required 
      />
      <button type="submit">{noteToEdit ? 'Update Note' : 'Create Note'}</button>
    </form>
  );
}

export default NoteForm;
