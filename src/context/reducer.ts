import { NoteData } from "../types/form";

export interface ReducerState {
    notes: NoteData[];
}

interface Actions {
    SET_NOTES: NoteData;
    LOAD_NOTES: NoteData[];
}

export type ReducerActions = {
	type: keyof Actions;
	payload?: any;
};

const initialState: ReducerState = { notes: [] };

const reducer = (state: ReducerState, action: ReducerActions) =>
	({
		SET_NOTES: { ...state, notes: [...state.notes, action.payload] },
        LOAD_NOTES: { ...state, notes: action.payload }
	}[action.type]);

const setNotes = (payload: NoteData): ReducerActions => ({type: "SET_NOTES", payload})
const loadNotes = (payload: ReducerState["notes"]): ReducerActions => ({type: "LOAD_NOTES", payload})

export default reducer;

export { setNotes, loadNotes, initialState };