import { useContext } from "react";

import noteContext from "./context";

const useEntityContext = () => {
  const store = useContext(noteContext);

  return store;
};

export default useEntityContext;
