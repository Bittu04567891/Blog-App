import "./post.css";
import { Link } from "react-router-dom";

export const Post = ({ post }) => {
  const PF = `${window.location.origin}/api/images/`;
  return (
    <div className="post">
      {post.photo && <img className="postImg" src={PF + post.photo} alt="" />}
      <div className="postInfo">
        <div className="postCats">
          {post.categories.map((c) => (
            <span className="postCat">{c.name}</span>
          ))}
        </div>
        <Link to={`${window.location.origin}/api/posts/${post._id}`}>
          <span className="postTitle">{post.title}</span>
        </Link>

        <span className="postDate">
          {new Date(post.createdAt).toDateString()}
        </span>
      </div>
      <p className="postDesc">{post.desc}</p>
    </div>
  );
};
