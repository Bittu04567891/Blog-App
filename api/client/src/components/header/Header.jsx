import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">Placement & Internship</span>
        <span className="headerTitleLg">Nit Jsr</span>
      </div>
      <img
        className="headerImg"
        src="https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        // src="./nit.jpg"
        alt=""
      />
    </div>
  );
};

export default Header;
