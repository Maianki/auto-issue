import "./App.css";
import { Homepage, CreateIssuePage, Callback } from "./pages";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Homepage />}></Route>
        <Route path='/create-issue' element={<CreateIssuePage />}></Route>
        <Route path='/callback' element={<Callback />} exact></Route>
      </Routes>
    </div>
  );
}

export default App;
