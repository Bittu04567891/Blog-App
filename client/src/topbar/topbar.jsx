import "./topbar.css";

const topbar = () => {
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
          <li className="topListItem">HOME</li>
          <li className="topListItem">ABOUT</li>
          <li className="topListItem">CONTACT</li>
          <li className="topListItem">WRITE</li>
          <li className="topListItem">LOGOUT</li>
        </ul>
      </div>
      <div className="topRight">
        <img
          className="topImg"
          src="https://media.licdn.com/dms/image/D4D03AQFq9mMjftSd0w/profile-displayphoto-shrink_800_800/0/1669202065529?e=1700092800&v=beta&t=O2ZSnngS5LpVyRSjN38sZBM6T9MqJyoGXcVuwzcENuk"
          alt=""
        />
        <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
};

export default topbar;
