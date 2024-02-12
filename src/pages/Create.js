import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useFetchCategory from "../components/useFetchCategory";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setbody] = useState("");
  const [category, setCategory] = useState("Live");
  const [author, setAuthor] = useState("");
  const [isPending, setIsPending] = useState(false);
  const history = useNavigate();
  const {
    data: categories,
    isPending: categoriesPending,
    error: categoriesError,
  } = useFetchCategory("http://localhost:8000/category");

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author, category };

    fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      console.log("new blog added");
      setIsPending(false);
      history("/");
    });
  };

  return (
    <div className="create">
      <div className="create-header">
        <p>Create</p>
        <h2>Add new blog</h2>
      </div>
      <div className="create-list">
        <div className="create-form">
          <form onSubmit={handleSubmit}>
            {categoriesError && <div>{categoriesError}</div>}
            {categoriesPending && <div>Loading categories...</div>}
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
              onChange={(e) => setbody(e.target.value)}
            ></textarea>
            <label>Category:</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              {categories &&
                categories.map((category) => (
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
            {!isPending && <button>Add Blog</button>}
            {isPending && <button>Adding Blog...</button>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Create;
