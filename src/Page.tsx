import { useState } from "react";
import Typography from "@mui/material/Typography";
import { NewNote } from "./components/NewNote";
import "./App.css";

export const Page = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="App">
      <Typography variant="h1" component="div" gutterBottom>
        Notes
      </Typography>
      <NewNote
        button={<button onClick={handleOpen}>Test</button>}
        open={open}
        handleClose={handleClose}
        onCreate={() => {}}
      />
    </div>
  );
};
