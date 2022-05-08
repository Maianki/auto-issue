import welcomeImg from "../../assets/welcome-img.svg";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

export function Homepage() {
  //   const [dropdown, setDropdown] = useState(false);
  return (
    <div className='popup-container'>
      <h1 className='extension-name text-bold-weight text-center'>
        <img className='site-logo' src={logo} alt='site logo' />
        <span>Create Auto Issues</span>
      </h1>
      <h3 className='issue-title text-xlg text-center'>
        want to report a bug?
      </h3>
      <img className='issue-img' src={welcomeImg} alt='issue-img' />
      <div className='issue-desc text-md text-center'>
        An easy to use chrome extension to create issue in the github repo of
        visiting webpage
      </div>
      <div className='issue-footer flex-r'>
        <Link to='/create-issue'>
          <button className='btn btn-primary text-md'>Raise Issue</button>
        </Link>

        {/* <button className='m-left-auto btn-icon1 btn footer-icon'>
          <i className='fa-solid fa-ellipsis-vertical'></i>
        </button> */}
      </div>

      {/* {dropdown && (
        <div
          onClick={() => {
            setDropdown((prev) => !prev);
          }}
          className='list-non-bullet dropdown-section'
        >
          <li className='dropdown-item'>
            <i className='fa-solid fa-pen'></i>
            <span>Edit</span>
          </li>
          <li className='dropdown-item'>
            <i className='fa-solid fa-trash-can'></i>
            <span>Delete</span>
          </li>
        </div>
      )} */}
    </div>
  );
}
