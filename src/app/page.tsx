import { useState } from "react";
import { NotePreview } from "./note/NotePreview";
import { Note } from "./note/type";
import styles from "./page.module.css";

async function getNotes() {
  const res = await fetch("http://localhost:7000/notes");

  if (!res.ok) {
    throw new Error("Failed to fetch notes");
  }

  return res.json();
}

export default async function Home() {
  const notes: Note[] = await getNotes();

  return (
    <main className={styles.main}>
      {notes.map((note) => (
        <NotePreview note={note} key={note.id} />
      ))}
    </main>
  );
}
