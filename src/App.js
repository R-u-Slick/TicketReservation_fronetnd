import { BrowserRouter } from "react-router-dom";

import PagesRouter from "./router/PagesRouter";

const App = () => {
  return (
    <BrowserRouter>
      <PagesRouter />
    </BrowserRouter>
  );
};

export default App;
