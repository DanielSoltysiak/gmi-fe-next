"use server";
import { revalidateTag } from "next/cache";

export async function editNote(id: string, title: string, description: string) {
  await fetch("http://localhost:7000/notes", {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id, title, description }),
  });
  revalidateTag(`note-${id}`);
}
