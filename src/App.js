
import React, { useState } from 'react';
import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList';
import Pagination from './components/Pagination';
import './index.css';

function App() {

  
  const [notes, setNotes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const notesPerPage = 2;
  const pagesLimit = 10;

  const handleCreateNote = (note) => {
    setNotes([...notes, { ...note, id: Date.now(), createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() }]);
  };

  const handleUpdateNote = (updatedNote) => {
    setNotes(notes.map(note => note.id === updatedNote.id ? { ...note, ...updatedNote, updatedAt: new Date().toISOString() } : note));
  };

  const handleDeleteNote = (id) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  const filteredNotes = notes.filter(note =>
    note.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredNotes.length / notesPerPage);
  const indexOfLastNote = currentPage * notesPerPage;
  const indexOfFirstNote = indexOfLastNote - notesPerPage;
  const currentNotes = filteredNotes.slice(indexOfFirstNote, indexOfLastNote);

  return (

    <div className="App">
       <h1>My Notes </h1>
      <div className="container">
        <div className="search-bar">
          <input 
            type="text" 
            placeholder="Search notes..." 
            value={searchTerm} 
            onChange={(e) => setSearchTerm(e.target.value)} 
          />
        </div>
        <NoteForm onCreate={handleCreateNote} />
        <NoteList 
          notes={currentNotes} 
          onUpdate={handleUpdateNote} 
          onDelete={handleDeleteNote} 
        />
        <Pagination 
          totalNotes={filteredNotes.length} 
          notesPerPage={notesPerPage} 
          currentPage={currentPage} 
          setCurrentPage={setCurrentPage} 
          totalPages={totalPages} 
          pagesLimit={pagesLimit}
        />
      </div>
    </div>
  );
}

export default App;
