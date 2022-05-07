import { useState } from "react";
import "./App.css";
import capture from "./assets/capture.png"
import { ModalContainer } from "./modal";

function App() {
  const [dropdown,setDropdown] = useState(false);
  return (
    <div>
      <div className="popup-container">
        <h3 className="extension-name text-bold-weight">Create Auto issues</h3>
        <div className="issue-title text-xlg">Spelling Mistake</div>
        <img className="issue-img" src={capture} alt="issue-img"/>
        <div className="issue-desc text-lg">Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..</div>
        <div className="issue-footer flex-r">
          <button className="btn btn-primary text-md">Create Issue</button>
          <button onClick={()=>{setDropdown(prev=>!prev)}} className="m-left-auto btn-icon1 btn footer-icon">
                      <i className="fa-solid fa-ellipsis-vertical"></i>
          </button>
        </div>

        {dropdown && <div onClick={()=>{setDropdown(prev=>!prev)}} className="list-non-bullet dropdown-section">
              <li className="dropdown-item">
                  <i className="fa-solid fa-pen"></i>
                  <span>Edit</span>
              </li>
              <li className="dropdown-item">
                  <i className="fa-solid fa-trash-can"></i>
                  <span>Delete</span>
              </li>
          </div>} 
      </div>
      <ModalContainer />
    </div>
  );
}

export default App;
