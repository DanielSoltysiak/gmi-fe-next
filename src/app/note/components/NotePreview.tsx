import {
  CardContent,
  Card,
  Typography,
  CardActions,
  Button,
  IconButton,
  ButtonGroup,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Note } from "../type";
import Link from "next/link";

interface Props {
  note: Note;
}

export const NotePreview = ({ note }: Props) => {
  const { id, title, description } = note;

  return (
    <Card sx={{ mx: 10, my: 5 }}>
      <CardContent>
        <Typography variant="h5">{title}</Typography>
        <Typography
          sx={{
            display: "-webkit-box",
            overflow: "hidden",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 2,
          }}
          variant="body1"
        >
          {description}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "space-between" }}>
        <Link href={`/note/${id}`}>
          <Button>Details</Button>
        </Link>
        <ButtonGroup>
          <Link href={`/note/${id}?action=edit`}>
            <IconButton aria-label="edit">
              <EditIcon />
            </IconButton>
          </Link>
          <Link href={`/note/${id}?action=delete`}>
            <IconButton aria-label="delete" color="error">
              <DeleteIcon />
            </IconButton>
          </Link>
        </ButtonGroup>
      </CardActions>
    </Card>
  );
};
