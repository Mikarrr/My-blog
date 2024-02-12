import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useFetchCategory from "./useFetchCategory";

const EditForm = ({ initialData, onSubmit }) => {
  const [title, setTitle] = useState(initialData.title);
  const [body, setBody] = useState(initialData.body);
  const [category, setCategory] = useState(initialData.category);
  const [author, setAuthor] = useState(initialData.author);
  const [isPending, setIsPending] = useState(false);
  const history = useNavigate();
  const {
    data: categories,
    isPending: categoriesPending,
    error: categoriesError,
  } = useFetchCategory("http://localhost:8000/category");

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedBlog = { title, body, category, author };

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
      {categoriesError && <div>{categoriesError}</div>}
      {categoriesPending && <div>Loading categories...</div>}
      {categories && (
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
          <label>Blog category:</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {categories.map((category) => (
              <option key={category.id} value={category.title}>
                {category.title}
              </option>
            ))}
          </select>
          <label>Blog author:</label>
          <input
            type="text"
            required
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
          {!isPending && <button>Edit Blog</button>}
          {isPending && <button>Updating Blog...</button>}
        </form>
      )}
    </div>
  );
};

export default EditForm;
