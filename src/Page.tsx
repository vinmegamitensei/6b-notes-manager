import { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import { NewNote } from "./components/NewNote";
import useNoteContext from "./context/useNoteContext";
import "./App.css";

export const Page = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { state, loadNotes, addNote } = useNoteContext();

  useEffect(() => {
    loadNotes();
  }, [loadNotes]);

  return (
    <div className="App">
      <Typography variant="h1" component="div" gutterBottom>
        Notes
      </Typography>
      <NewNote
        button={<button onClick={handleOpen}>Test</button>}
        open={open}
        handleClose={handleClose}
        onCreate={addNote}
      />
      {state.notes.map((item: any) => (
        <p>{item.title}</p>
      ))}
    </div>
  );
};
