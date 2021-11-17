import { useState, useEffect } from "react";
import { Container, Typography } from "@mui/material";
import { NewNote } from "./components/NewNote";
import { NewNoteButton } from "./components/NewNoteButton";
import { ExistingNote } from "./components/ExistingNote";
import useNoteContext from "./context/useNoteContext";
import "./App.css";
import { NoteData } from "./types/form";

const titleStyle = {
  fontSize: "32px",
  fontWeight: 600,
  margin: 0,
};

const containerStyle = {
  paddingTop: "32px",
  paddingLeft: "48px !important",
};

export const Page = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { state, loadNotes, addNote } = useNoteContext();

  const isEmpty = state.notes.length === 0;

  useEffect(() => {
    loadNotes();
  }, [loadNotes]);

  return (
    <div className="App">
      <Container maxWidth="xl" sx={containerStyle}>
        <Typography variant="h1" component="div" gutterBottom sx={titleStyle}>
          Notes
        </Typography>
        <div className="contentContainer">
          <NewNote
            button={<NewNoteButton onClick={handleOpen} hasData={!isEmpty} />}
            open={open}
            handleClose={handleClose}
            onCreate={addNote}
            listLength={state.notes.length}
          />
          {state.notes.map((item: NoteData) => (
            <ExistingNote data={item} />
          ))}
        </div>
      </Container>
    </div>
  );
};
