import { CardContent, Card, Typography } from "@mui/material";
import { Note } from "./type";

interface Props {
  note: Note;
}

export const NotePreview = ({ note }: Props) => {
  const { title, description } = note;
  return (
    <Card>
      <CardContent>
        <Typography>{title}</Typography>
        <Typography>{description}</Typography>
      </CardContent>
    </Card>
  );
};
