"use server";
import { revalidateTag } from "next/cache";

export async function deleteNote(id: string) {
  await fetch(`http://localhost:7000/notes/${id}`, {
    method: "DELETE",
  });
  revalidateTag("notes");
}
