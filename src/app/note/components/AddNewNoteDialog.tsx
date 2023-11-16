import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { addNote } from "@/utils/addNote";
import { useState } from "react";
import { getNotes } from "@/utils/getNotes";

interface Props {
  dialogOpen: boolean;
  handleDialogClose: () => void;
}

export const AddNewNoteDialog = ({ dialogOpen, handleDialogClose }: Props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [titleError, setTitleError] = useState(false);
  const [descriptionError, setDescriptionError] = useState(false);

  const handleAddNote = () => {
    if (title.length > 1 && description.length > 1) {
      addNote(title, description);
      handleDialogClose();
    } else {
      title.length < 1 ? setTitleError(true) : setTitleError(false);
      description.length < 1
        ? setDescriptionError(true)
        : setDescriptionError(false);
    }
  };

  return (
    <Dialog
      open={dialogOpen}
      onClose={handleDialogClose}
      fullWidth
      maxWidth="lg"
    >
      <DialogTitle>Add new note</DialogTitle>
      <DialogContent>
        <DialogContentText>
          To add new note, please enter title and description
        </DialogContentText>
        <TextField
          required
          error={titleError}
          helperText={titleError && "Title can not be empty"}
          autoFocus
          margin="dense"
          id="title"
          label="Note title"
          fullWidth
          variant="standard"
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextField
          required
          error={descriptionError}
          helperText={descriptionError && "Description can not be empty"}
          multiline
          rows={5}
          margin="dense"
          id="description"
          label="Note description"
          fullWidth
          variant="standard"
          onChange={(e) => setDescription(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleDialogClose} color="error">
          Cancel
        </Button>
        <Button onClick={handleAddNote} endIcon={<AddIcon />}>
          Add note
        </Button>
      </DialogActions>
    </Dialog>
  );
};
