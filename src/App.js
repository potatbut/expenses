
import { BrowserRouter } from "react-router-dom";
import AppMain from "./components/AppMain";
import AppRouter from "./components/AppRouter";
import Login from "./components/Login";

function App() {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  )
}

export default App; 
