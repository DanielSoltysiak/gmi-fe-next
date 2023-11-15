import { getNotes } from "@/utils/getNotes";
import { NotePreview } from "./note/components/NotePreview";

export default async function Home() {
  const notes = await getNotes();

  return (
    <>
      {notes.map((note) => (
        <NotePreview note={note} key={note.id} />
      ))}
    </>
  );
}
