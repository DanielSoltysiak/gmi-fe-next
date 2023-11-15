import { Note } from "@/app/note/type";

export async function getNotes() {
  const res = await fetch("http://localhost:7000/notes", {
    cache: "no-cache",
    next: { tags: ["notes"] },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch notes");
  }

  const notes: Note[] = await res.json();

  return notes;
}
