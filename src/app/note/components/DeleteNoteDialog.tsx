import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { deleteNote } from "@/utils/deleteNote";
import { useRouter } from "next/navigation";

interface Props {
  dialogOpen: boolean;
  handleDialogClose: () => void;
  noteId: string;
}

export const DeleteNoteDialog = ({
  dialogOpen,
  handleDialogClose,
  noteId,
}: Props) => {
  const router = useRouter();

  const handleDeleteNote = () => {
    deleteNote(noteId);
    router.replace("/");
  };

  return (
    <Dialog open={dialogOpen} onClose={handleDialogClose} fullWidth>
      <DialogTitle>Are you sure?</DialogTitle>
      <DialogContent>
        <DialogContentText>Deleted note can not be restored</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleDialogClose}>Cancel</Button>
        <Button
          onClick={handleDeleteNote}
          color="error"
          endIcon={<DeleteIcon />}
        >
          Delete note
        </Button>
      </DialogActions>
    </Dialog>
  );
};
