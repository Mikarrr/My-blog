import React, { useState } from "react";

const Blog = () => {
  const [blogs, setBlogs] = useState([
    {
      id: 1,
      title: "Blog 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
    },
    {
      id: 2,
      title: "Blog 2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
    },
  ]);

  const [newBlog, setNewBlog] = useState({ title: "", description: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewBlog((prevBlog) => ({ ...prevBlog, [name]: value }));
  };

  const handleAddBlog = () => {
    const highestId = Math.max(...blogs.map((blog) => blog.id), 1);

    setBlogs((prevBlogs) => [
      ...prevBlogs,
      {
        id: highestId + 1,
        title: newBlog.title,
        description: newBlog.description,
      },
    ]);

    setNewBlog({ title: "", description: "" });
  };

  const handleDeleteBlog = (idToDelete) => {
    const updatedBlogs = blogs.filter((blog) => blog.id !== idToDelete);
    setBlogs(updatedBlogs);
  };

  return (
    <div className="blog-container">
      <ul>
        {blogs.map((blog) => (
          <li key={blog.id}>
            <h2>{blog.title}</h2>
            <p>{blog.description}</p>
            <div>
              <button onClick={() => handleDeleteBlog(blog.id)}>Delete</button>
              <button>Read More</button>
            </div>
          </li>
        ))}
      </ul>
      <h2>Add a New Blog</h2>
      <form>
        <label>
          Title:
          <input
            type="text"
            name="title"
            value={newBlog.title}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Description:
          <textarea
            name="description"
            value={newBlog.description}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <button type="button" onClick={handleAddBlog}>
          Add Blog
        </button>
      </form>
    </div>
  );
};

export default Blog;
