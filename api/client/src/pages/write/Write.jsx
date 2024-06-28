import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./write.css";
import axios from "axios";
import { Context } from "../../context/Context";
import upload from "../../lib/upload";

const Write = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [file, setFile] = useState(null);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const { user } = useContext(Context);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await axios.get(`${window.location.origin}/api/categories`);
        setCategories(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchCategories();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      username: user.username,
      title,
      desc,
      category: selectedCategory,
    };
    if (file) {
      try {
        const photoURL = await upload(file);
        newPost.photo = photoURL; // Use the direct URL from Firebase Storage
        setImgUrl(photoURL);
      } catch (err) {
        console.log(err);
      }
    }
    try {
      const res = await axios.post(
        `${window.location.origin}/api/posts`,
        newPost
      );
      navigate(`/posts/${res.data._id}`); // Adjust this route if necessary
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="write">
      {file && <img className="writeImg" src={file ? imgUrl : ""} alt="" />}
      <form className="writeForm" onSubmit={handleSubmit}>
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fa-solid fa-plus"></i>
          </label>
          <input
            className="writeInput"
            type="file"
            id="fileInput"
            style={{ display: "none" }}
            onChange={(e) => setFile(e.target.files[0])}
          />
          <input
            type="text"
            placeholder="Title"
            className="writeInput"
            autoFocus={true}
            onChange={(e) => setTitle(e.target.value)}
          />
          <div className="writeFormGroup">
            <select
              className="writeInput"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="" disabled>
                Select a category
              </option>
              {categories.map((cat) => (
                <option key={cat._id} value={cat.name}>
                  {cat.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="writeFormGroup">
          <textarea
            placeholder="Tell your story..."
            type="text"
            className="writeInput writeText"
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>

        <button className="writeSubmit" type="submit">
          Publish
        </button>
      </form>
    </div>
  );
};

export default Write;
