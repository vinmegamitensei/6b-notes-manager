import { createContext } from "react";

const notesContext = createContext<any>([]);

const { Provider, Consumer } = notesContext;

export { Provider, Consumer };

export default notesContext;