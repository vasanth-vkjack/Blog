import { useEffect, useState } from 'react';
import './CSS/Home.css'
import axios from 'axios';
import { Link } from 'react-router-dom';

const Home = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/blogs')
      .then(res => setBlogs(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className='container' style={{ padding: "2rem" }}>
      <div className='heading'><h1>All Blog Posts</h1></div>
      <div className='newpost'>
      <Link style={{textDecoration: "none", color: "#007BFF"}} to="/create">Write New Post</Link>
      </div>
      {blogs.map(blog => (
        <div key={blog._id} style={{ marginTop: '1rem', padding: '1rem', border: '1px solid #ccc' }}>
          <h2>{blog.title}</h2>
          <p><i>by {blog.author}</i></p>
          <p>{blog.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
