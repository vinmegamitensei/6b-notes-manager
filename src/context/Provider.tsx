import { ReactNode, useReducer, useCallback } from "react";
import { NoteData } from "../types/form";
import {
  getNotes,
  setNotes as localStorageNotes,
} from "../utils/localStorageHandler";
import { Provider as NoteProvider } from "./context";
import reducer, * as actions from "./reducer";

interface ContextProps {
  children: ReactNode;
}

export const Provider = ({ children }: ContextProps) => {
  const [state, dispatch] = useReducer(reducer, actions.initialState);
  const loadNotes = useCallback(() => {
    const notes: NoteData[] = getNotes();
    dispatch(actions.loadNotes(notes));
  }, []);
  const addNote = useCallback((data: NoteData) => {
    localStorageNotes(data);
    dispatch(actions.setNotes(data));
  }, []);

  return (
    <NoteProvider value={{ state, loadNotes, addNote }}>
      {children}
    </NoteProvider>
  );
};
