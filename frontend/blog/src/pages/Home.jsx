import { useEffect } from "react";
import "./CSS/Home.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteblog, fetchBlogs } from "../slices/blogSlice";

const Home = () => {
  const { blogs, error, loading } = useSelector((state) => state.blogs);

  console.log(blogs);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch]);

  const deleteBlog = async (_id) => {
    if (window.confirm("Are you sure you want to delete this post")) {
      await axios
        .delete(`http://localhost:5000/api/blogs/${_id}`)
        .then(() => {
          dispatch(deleteblog(_id));
        })
        .catch((err) => console.log(err));
    }
  };
  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div className="container" style={{ padding: "2rem" }}>
      <div className="heading">
        <h1>All Blog Posts</h1>
      </div>
      <div className="newpost">
        <Link style={{ textDecoration: "none", color: "#007BFF" }} to="/create">
          Write New Post
        </Link>
      </div>
      {blogs.map((blog) => (
        <div
          key={blog._id}
          style={{
            marginTop: "1rem",
            padding: "1rem",
            border: "1px solid #ccc",
          }}
        >
          <div>
            <h2>{blog.title}</h2>
            <p>
              <i>by {blog.author}</i>
            </p>
            <p>{blog.content}</p>
          </div>
          <div>
            <button onClick={() => deleteBlog(blog._id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
