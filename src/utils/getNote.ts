import { Note } from "@/app/note/type";

export async function getNote(id: string) {
  const res = await fetch(`http://localhost:7000/notes/${id}`, {
    next: { tags: [`note-${id}`] },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch note");
  }

  const note: Note = await res.json();

  return note;
}
