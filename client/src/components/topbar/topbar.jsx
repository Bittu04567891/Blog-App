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
            <a href="/">HOME</a>
          </li>
          <li className="topListItem">
            <a href="/">ABOUT</a>
          </li>
          <li className="topListItem">
            <a href="/">CONTACT</a>
          </li>
          <li className="topListItem">
            <a href="/write">WRITE</a>
          </li>
          <li className="topListItem">
            <a href="/">{user && "LOGOUT"}</a>
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
                <a href="/login">LOGIN</a>
              </li>
              <li className="topListItem">
                <a href="/register">REGISTER</a>
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
