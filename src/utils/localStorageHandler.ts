import { FormData } from "../types/form";
import { generateNewNote } from "../utils/generateNewNote"



export function getNotes(){
    if(window.localStorage.getItem('notes') !== null) {
        return JSON.parse(localStorage.getItem('notes') as string);
    }
    return [];
}

export function setNotes(data: FormData){    
    const newNote = generateNewNote(data);
    const currentNotes = getNotes();
    const updatedNotes = [ ...currentNotes, newNote];
    return localStorage.setItem('notes', JSON.stringify(updatedNotes));
}