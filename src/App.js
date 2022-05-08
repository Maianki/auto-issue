import "./App.css";
import { Homepage, CreateIssuePage } from "./pages";
import { ModalContainer } from "./Modal";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Homepage />}></Route>
        <Route path='/create-issue' element={<CreateIssuePage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
