import React, { useState } from 'react';
import { getInitialData } from './utils';
import NoteList from './components/NoteList';
import NoteForm from './components/NoteForm';
import Footer from './components/Footer';


function App() {
    const [notes, setNotes] = useState(getInitialData());

    const addNote = (title, body) => {
        const newNote = {
            id: +new Date(),
            title,
            body,
            archived: false,
            createdAt: new Date().toISOString(),
        };
        setNotes([...notes, newNote]);
    };

    const deleteNote = (id) => {
        setNotes(notes.filter(note => note.id !== id));
    };

    const toggleArchiveNote = (id) => {
        setNotes(
            notes.map(note =>
                note.id === id ? { ...note, archived: !note.archived } : note
            )
        );
    };

    return (
        <div className="note-app">
            <header className="note-app__header">
                <h1>Catatan Pribadi</h1>
            </header>
            <div className="note-app__body">
                <NoteForm addNote={addNote} />
                <h2>Catatan Aktif</h2>
                <NoteList notes={notes.filter(note => !note.archived)} deleteNote={deleteNote} toggleArchiveNote={toggleArchiveNote} />
                <h2>Arsip</h2>
                <NoteList notes={notes.filter(note => note.archived)} deleteNote={deleteNote} toggleArchiveNote={toggleArchiveNote} />
            </div>
            <Footer />
        </div>
    );
}

export default App;
