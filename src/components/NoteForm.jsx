import React, { useState } from 'react';

function NoteForm({ addNote }) {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const maxTitleLength = 50;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (title && body) {
            addNote(title, body);
            setTitle('');
            setBody('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="note-input">
            <input
                type="text"
                placeholder="Judul Catatan"
                value={title}
                onChange={(e) => setTitle(e.target.value.slice(0, maxTitleLength))}
                className="note-input__title"
            />
            <p className="note-input__title__char-limit">
                Sisa karakter: {maxTitleLength - title.length}
            </p>
            <textarea
                placeholder="Isi Catatan"
                value={body}
                onChange={(e) => setBody(e.target.value)}
                className="note-input__body"
            />
            <button type="submit">Tambah Catatan</button>
        </form>
    );
}

export default NoteForm;
