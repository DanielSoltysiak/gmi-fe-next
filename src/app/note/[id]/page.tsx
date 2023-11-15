import { getNote } from "@/utils/getNote";
import { Box, Button, ButtonGroup, Paper, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

export default async function Page({ params }: { params: { id: string } }) {
  const note = await getNote(params.id);
  const { title, description } = note;
  return (
    <Paper sx={{mx: 10, p: 5}}>
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
          <Button aria-label="edit" endIcon={<EditIcon />}>
            Edit post
          </Button>
          <Button aria-label="delete" color="error" endIcon={<DeleteIcon />}>
            Delete post
          </Button>
        </Box>
      </Box>
      <Typography>{description}</Typography>
    </Paper>
  );
}
