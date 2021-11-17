import { FormData } from "../types/form"

function pickRandomColour(){
    return Math.floor(Math.random()*16777215).toString(16)
}

export function generateNewNote(data: FormData){
    const date = new Date().toLocaleDateString();
    return ({
        ...data,
        colour: `#${pickRandomColour()}`,
        date
    })
}