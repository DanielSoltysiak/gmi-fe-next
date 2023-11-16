"use client";

import { Box, Button, Container, Paper, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useState } from "react";
import { EditNoteDialog } from "../components/EditNoteDialog";
import { Note } from "../type";
import { useSearchParams } from "next/navigation";
import { DeleteNoteDialog } from "../components/DeleteNoteDialog";

interface Props {
  note: Note;
}

export const NotePage = ({ note }: Props) => {
  const params = useSearchParams();
  const editMode = params.get("action") === "edit";
  const deleteMode = params.get("action") === "delete";

  const [editDialogOpen, setEditDialogOpen] = useState(editMode);
  const [deletDialogOpen, setDeleteDialogOpen] = useState(deleteMode);

  const { id, title, description } = note;

  return (
    <>
      <Paper
        sx={{
          mx: { xs: 2, sm: 10 },
          my: { xs: 2, sm: 5 },
          p: { xs: 2, sm: 5 },
        }}
      >
        <Box
          flexDirection={{ xs: "column-reverse", sm: "row" }}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={{ xs: 2, sm: 5 }}
        >
          <Typography variant="h3" component="h2" display="inline">
            {title}
          </Typography>
          <Box>
            <Button
              aria-label="edit"
              endIcon={<EditIcon />}
              onClick={() => setEditDialogOpen(true)}
            >
              Edit post
            </Button>
            <Button
              aria-label="delete"
              color="error"
              endIcon={<DeleteIcon />}
              onClick={() => setDeleteDialogOpen(true)}
            >
              Delete post
            </Button>
          </Box>
        </Box>
        <Typography>{description}</Typography>
      </Paper>
      <EditNoteDialog
        dialogOpen={editDialogOpen}
        handleDialogClose={() => setEditDialogOpen(false)}
        note={note}
      />
      <DeleteNoteDialog
        dialogOpen={deletDialogOpen}
        handleDialogClose={() => setDeleteDialogOpen(false)}
        noteId={id}
      />
    </>
  );
};
