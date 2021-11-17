export interface FormData {
    title: string; 
    subtitle: string; 
    content: string
} 

export interface NoteData extends FormData {
    id: string;
    colour: string;
    date: string;
}