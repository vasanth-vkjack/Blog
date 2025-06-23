
import { useState } from 'react';
import axios from 'axios';
import './CSS/Home.css'
import { useNavigate } from 'react-router-dom';

const Create = () => {
  const [blog, setBlog] = useState({ title: '', content: '', author: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setBlog({ ...blog, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:5000/api/blogs', blog);
    navigate('/');
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Create New Blog</h1>
      <form onSubmit={handleSubmit}>
        <input name="title" placeholder="Title" value={blog.title} onChange={handleChange} required /><br />
        <input name="author" placeholder="Author" value={blog.author} onChange={handleChange} required /><br />
        <textarea name="content" placeholder="Content" value={blog.content} onChange={handleChange} rows="5" required /><br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Create;
