import { Link } from "react-router-dom";
import "./topbar.css";
import { useContext } from "react";
import { Context } from "../../context/Context";

const Topbar = () => {
  const { user, dispatch } = useContext(Context);
  const PF = `${window.location.origin}/api/images/`;
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  console.log("Profile picture URL: ", PF + user?.profilePic);
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
            <Link to="/">HOME</Link>
          </li>
          <li className="topListItem">
            <Link to="/">ABOUT</Link>
          </li>
          <li className="topListItem">
            <Link to="/">CONTACT</Link>
          </li>
          <li className="topListItem">
            <Link to="/write">WRITE</Link>
          </li>
          <li className="topListItem" onClick={handleLogout}>
            {user && "LOGOUT"}
          </li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <Link to="/settings">
            <img className="topImg" src={PF + user.profilePic} alt="" />
          </Link>
        ) : (
          <>
            <ul className="topList">
              <li className="topListItem">
                <Link to="/login">LOGIN</Link>
              </li>
              <li className="topListItem">
                <Link to="/register">REGISTER</Link>
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
