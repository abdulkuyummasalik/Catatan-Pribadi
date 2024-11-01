import React from 'react';
import NoteItem from './NoteItem';

function NoteList({ notes, deleteNote, toggleArchiveNote }) {
    if (notes.length === 0) {
        return <p className="notes-list__empty-message">Tidak ada catatan.</p>;
    }

    return (
        <div className="notes-list">
            {notes.map(note => (
                <NoteItem
                    key={note.id}
                    note={note}
                    deleteNote={deleteNote}
                    toggleArchiveNote={toggleArchiveNote}
                />
            ))}
        </div>
    );
}

export default NoteList;
