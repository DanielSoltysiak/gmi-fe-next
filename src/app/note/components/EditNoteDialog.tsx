import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { editNote } from "@/utils/editNote";
import { Note } from "../type";
import { getNote } from "@/utils/getNote";

interface Props {
  dialogOpen: boolean;
  handleDialogClose: () => void;
  note: Note;
}

export const EditNoteDialog = ({
  dialogOpen,
  handleDialogClose,
  note,
}: Props) => {
  const { id, title, description } = note;

  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);

  const handleSave = () => {
    editNote(id, newTitle, newDescription);
    handleDialogClose();
    getNote(id);
  };

  return (
    <Dialog
      open={dialogOpen}
      onClose={handleDialogClose}
      fullWidth
      maxWidth="lg"
    >
      <DialogTitle>Edit note</DialogTitle>
      <DialogContent>
        <TextField
          defaultValue={title}
          autoFocus
          margin="dense"
          id="title"
          label="Note title"
          fullWidth
          variant="standard"
          onChange={(e) => setNewTitle(e.target.value)}
        />
        <TextField
          defaultValue={description}
          multiline
          rows={5}
          margin="dense"
          id="description"
          label="Note description"
          fullWidth
          variant="standard"
          onChange={(e) => setNewDescription(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleDialogClose} color="error">
          Cancel
        </Button>
        <Button onClick={handleSave} color="success">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};
