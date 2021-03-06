import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import PostAddIcon from "@mui/icons-material/PostAdd";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Data } from "../assets/data";

const theme = createTheme();

export default function Login() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const newdata = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    const newId = Data.length + 1;
    const newBlog = {
      id: newId,
      title: newdata.get("title"),
      img_url: newdata.get("img_url"),
      desc: newdata.get("desc"),
    };
    console.log(newBlog);
    // Data = [...Data, newBlog];
    console.log("Data:", Data);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar
            variant="rounded"
            sx={{ mb: 2, bgcolor: "blue[300]", width: 50, height: 50 }}
          >
            <PostAddIcon fontSize="large" />
          </Avatar>
          <Typography component="h1" variant="h5">
            New Blog Post
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="title"
              label="Title"
              name="title"
              autoComplete="title"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="img_url"
              label="Image URL"
              id="img_url"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="desc"
              label="Description"
              id="desc"
              multiline
              rows={9}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Submit
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
