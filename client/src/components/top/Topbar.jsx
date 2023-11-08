import { Link } from "react-router-dom";
import "./topbar.css";
import { useContext } from "react";
import { Context } from "../../context/Context";

const Topbar = () => {
  const { user, dispatch } = useContext(Context);

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fa-brands fa-square-facebook" />
        <i className="topIcon fa-brands fa-twitter" />
        <i className="topIcon fa-brands fa-pinterest" />
        <i className="topIcon fa-brands fa-instagram" />
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link to="/Blog-App/">HOME</Link>
          </li>
          <li className="topListItem">
            <Link to="/Blog-App/">ABOUT</Link>
          </li>
          <li className="topListItem">
            <Link to="/Blog-App/">CONTACT</Link>
          </li>
          <li className="topListItem">
            <Link to="/Blog-App/write">WRITE</Link>
          </li>
          <li className="topListItem" onClick={handleLogout}>
            {user && "LOGOUT"}
          </li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <img className="topImg" src={user.profilePic} alt="" />
        ) : (
          <>
            <ul className="topList">
              <li className="topListItem">
                <Link to="/Blog-App/login">LOGIN</Link>
              </li>
              <li className="topListItem">
                <Link to="/Blog-App/register">REGISTER</Link>
              </li>
            </ul>
          </>
        )}

        <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
};

export default Topbar;
