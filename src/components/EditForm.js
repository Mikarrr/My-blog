import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const EditForm = ({ initialData, onSubmit }) => {
  const [title, setTitle] = useState(initialData.title);
  const [body, setBody] = useState(initialData.body);
  const [author, setAuthor] = useState(initialData.author);
  const [isPending, setIsPending] = useState(false);
  const history = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedBlog = { title, body, author };

    setIsPending(true);

    fetch(`http://localhost:8000/blogs/${initialData.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedBlog),
    })
      .then(() => {
        console.log("Blog updated");
        setIsPending(false);
        history("/");
        onSubmit(updatedBlog);
      })
      .catch((error) => {
        console.error("Error updating blog:", error);
        setIsPending(false);
      });
  };

  return (
    <div className="edit-form">
      <h2>Edit Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Blog author:</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="mario">mario</option>
          <option value="yoshi">yoshi</option>
        </select>
        {!isPending && <button>Edit Blog</button>}
        {isPending && <button>Updating Blog...</button>}
      </form>
    </div>
  );
};

export default EditForm;
