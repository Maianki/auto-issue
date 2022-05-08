import "./App.css";
import { Homepage } from "./pages";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Homepage />}></Route>
        <Route path='/createe-issue' element={<>Create Issue</>}></Route>
      </Routes>
    </div>
  );
}

export default App;
