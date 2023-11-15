"use client";

import { AppBar, Button, Dialog, Toolbar, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import { AddNewNoteDialog } from "./note/components/AddNewNoteDialog";

export const TopBar = () => {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h3" component="h1" sx={{ flexGrow: 1 }}>
            Notes
          </Typography>
          <Button
            color="inherit"
            endIcon={<AddIcon />}
            onClick={() => setDialogOpen(true)}
          >
            Add new note
          </Button>
        </Toolbar>
      </AppBar>
      <AddNewNoteDialog
        dialogOpen={dialogOpen}
        handleDialogClose={() => setDialogOpen(false)}
      />
    </>
  );
};
