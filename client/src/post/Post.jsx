import "./post.css";

export const Post = () => {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://i.pinimg.com/236x/1e/3f/58/1e3f587572a7a7b20bbf1828595a1786--holiday-party-themes-holiday-gift-guide.jpg"
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">
          Lorem ipsum dolor sit, amet consectetur
        </span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
    </div>
  );
};
