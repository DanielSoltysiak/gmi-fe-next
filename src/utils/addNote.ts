"use server";
import { revalidateTag } from "next/cache";

export async function addNote(title: string, description: string) {
  await fetch("http://localhost:7000/notes", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title, description }),
  });
  revalidateTag("notes");
}
