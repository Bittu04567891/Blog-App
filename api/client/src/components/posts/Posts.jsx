import { Post } from "../post/Post";
import "./posts.css";

const Posts = ({ posts }) => {
  return (
    <div className="posts">
      {posts.map((p, ind) => (
        <Post post={p} key={ind} />
      ))}
    </div>
  );
};

export default Posts;
