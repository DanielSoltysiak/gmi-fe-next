"use client";

import { Box, Button, Paper, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useState } from "react";
import { EditNoteDialog } from "../components/EditNoteDialog";
import { Note } from "../type";
import { useSearchParams } from "next/navigation";

interface Props {
  note: Note;
}

export const NotePage = ({ note }: Props) => {
  const params = useSearchParams();
  const editionMode = params.get("edit") ? true : false;
  
  const { title, description } = note;

  const [editDialogOpen, setEditDialogOpen] = useState<boolean>(editionMode);

  return (
    <>
      <Paper sx={{ mx: 10, p: 5 }}>
        <Box
          flexDirection="row"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={5}
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
            <Button aria-label="delete" color="error" endIcon={<DeleteIcon />}>
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
    </>
  );
};
