import { Link } from "react-router-dom";
import "./topbar.css";

const topbar = () => {
  const user = false;
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
          <li className="topListItem">
            <Link to="/Blog-App/">{user && "LOGOUT"}</Link>
          </li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <img
            className="topImg"
            src="https://media.licdn.com/dms/image/D4D03AQFq9mMjftSd0w/profile-displayphoto-shrink_800_800/0/1669202065529?e=1700092800&v=beta&t=O2ZSnngS5LpVyRSjN38sZBM6T9MqJyoGXcVuwzcENuk"
            alt=""
          />
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

export default topbar;
