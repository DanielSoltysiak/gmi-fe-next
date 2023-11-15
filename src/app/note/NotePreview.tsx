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
import { Note } from "./type";

interface Props {
  note: Note;
}

export const NotePreview = ({ note }: Props) => {
  const { title, description } = note;

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
        <Button>Details</Button>
        <ButtonGroup>
          <IconButton aria-label="edit">
            <EditIcon />
          </IconButton>
          <IconButton aria-label="delete" color="error">
            <DeleteIcon />
          </IconButton>
        </ButtonGroup>
      </CardActions>
    </Card>
  );
};
