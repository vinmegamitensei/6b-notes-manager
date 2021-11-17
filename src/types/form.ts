export interface FormData {
    title: string; 
    subtitle: string; 
    content: string
} 

export interface NoteData extends FormData {
    colour: string;
    date: string;
}