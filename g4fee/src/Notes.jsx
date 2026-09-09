import React, { useEffect, useRef, useState } from "react";

export function Notes() {
    const titleRef = useRef(null);
    const contentRef = useRef(null);

    const [notes, setNotes] = useState(() => {
        const savedNotes = localStorage.getItem("notes");
        return savedNotes ? JSON.parse(savedNotes) : [];
    });

    const [editId, setEditId] = useState(null);
    
    useEffect(() => {
        document.title = "Notes App ";
    }, []);

    useEffect(() => {
        localStorage.setItem("notes", JSON.stringify(notes));
    }, [notes]);

    function handleAddNote() {
        if (!titleRef.current.value || !contentRef.current.value) {
            alert("Please enter both title and content.");
            return;
        }

        if (editId) {
            setNotes(
                notes.map((note) =>
                    note.id === editId
                        ? {
                              ...note,
                              title: titleRef.current.value,
                              content: contentRef.current.value,
                          }
                        : note
                )
            );
            setEditId(null);
        } else {
            const newNote = {
                id: Date.now(),
                title: titleRef.current.value,
                content: contentRef.current.value,
            };

            // unique id based on timestamo
            //nanoid can also be used for unique ids , npm install nanoid and then import {}

            setNotes([...notes, newNote]);
        }

        // clear imput fields
        titleRef.current.value = "";
        contentRef.current.value = "";
    }

    function handleDelete(id) {
        const updatedNotes = notes.filter((note) => note.id !== id);
        setNotes(updatedNotes);
    }

    function handleEdit(note) {
        titleRef.current.value = note.title;
        contentRef.current.value = note.content;
        setEditId(note.id);
    }

    return (
        <section className="c1 box">
            <div className="fy box p1 b1 mb1">
                <h3 className="mt1 mb1 fs1">Notes App</h3>

                <input
                    ref={titleRef}
                    type="text"
                    placeholder="Enter note topic"
                    spellCheck={false}
                    className="fs1"
                />

                <textarea
                    ref={contentRef}
                    placeholder="Write your note..."
                    spellCheck={false}
                    className="fs1"
                    style={{ height: "7rem" }}
                />
                <button onClick={handleAddNote}>
                    {editId ? "Update Note" : "Add Note"}
                </button>
            </div>
            <div className="box b1">
                <h3 className="mt1 fs1 mb2">My Notes</h3>

                {/* display notes */}

                {notes.map((note) => (
                    <div key={note.id} className="box p1 b1 mb1">
                        <div className="fx" style={{ justifyContent: "space-between" }}>
                            <h4
                                className="fs3 mb1"
                                style={{
                                    width: "fit-content",
                                    color: "yellow",
                                    //borderLeft: "3px solid skyblue",
                                }}
                            >
                                Topic : {note.title}
                            </h4>
                            <h4 className="fs1">id : {note.id}</h4>
                        </div>
                        <div className="p1">
                            <p className="fs2" style={{ whiteSpace: "pre-wrap" }}>
                                {note.content}
                            </p>
                            <button className="btn2 mt2" onClick={() => handleEdit(note)}>
                                Edit
                            </button>
                            <span style={{ width: "0.5rem" }}></span>
                            <button className="btn2 mt2" onClick={() => handleDelete(note.id)}>
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}