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

  const handleAddNote = () => {
    addNote(title, description);
    handleDialogClose();
    getNotes();
  };

  return (
    <Dialog open={dialogOpen} onClose={handleDialogClose}>
      <DialogTitle>Add new note</DialogTitle>
      <DialogContent>
        <DialogContentText>
          To add new note, please enter title and description
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="title"
          label="Note title"
          fullWidth
          variant="standard"
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextField
          multiline
          rows={4}
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
