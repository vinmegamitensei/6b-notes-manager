import { Provider } from "./context/Provider";
import { Page } from "./Page";

function App() {
  return (
    <Provider>
      <Page />
    </Provider>
  );
}

export default App;
