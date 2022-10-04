import { BrowserRouter } from "react-router-dom";
import "./App.css";
import TeacherPage from "./Pages/TeacherPage";

function App() {
  return (
    <BrowserRouter>
      <TeacherPage />
    </BrowserRouter>
  );
}

export default App;
