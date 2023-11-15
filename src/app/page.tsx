import { getNotes } from "@/utils/getNotes";
import { NotePreview } from "./note/NotePreview";
import { Box } from "@mui/material";

export default async function Home() {
  const notes = await getNotes();

  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        height: "100vh",
        overflow: "auto",
        pt: 15
      }}
    >
      {notes.map((note) => (
        <NotePreview note={note} key={note.id} />
      ))}
    </Box>
  );
}
