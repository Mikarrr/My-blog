import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateCategory = () => {
  const [title, setTitle] = useState("");
  const [isPending, setIsPending] = useState(false);
  const history = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const category = { title };

    fetch("http://localhost:8000/category", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(category),
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
            <label>Category:</label>
            <input
              type="text"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            {!isPending && <button>Add Category</button>}
            {isPending && <button>Adding Category...</button>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateCategory;
