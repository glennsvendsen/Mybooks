import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./AppRoutes";

const App = () => (
  <BrowserRouter basename="/Mybooks">
    <AppRoutes />
  </BrowserRouter>
);

export default App;
