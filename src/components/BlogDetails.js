import { useParams } from "react-router";
import useFetch from "./useFetch";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import EditForm from "./EditForm";

const BlogDetails = () => {
  const { id } = useParams();
  const { data, error, isPending } = useFetch(
    `http://localhost:8000/blogs/${id}`
  );
  const history = useNavigate();
  const [isEditFormVisible, setEditFormVisible] = useState(false);

  const handleToggleEditForm = () => {
    setEditFormVisible(!isEditFormVisible);
  };

  const handleEditSubmit = (updatedData) => {
    fetch(`http://localhost:8000/blogs/${data.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedData),
    }).then(() => {
      setEditFormVisible(false);
    });
  };

  const handleClickDelete = () => {
    fetch(`http://localhost:8000/blogs/${data.id}`, {
      method: "DELETE",
    }).then(() => {
      history("/");
    });
  };

  return (
    <div className="blog-details">
      {isPending && <div>Ładowanie...</div>}
      {error && <div>{error}</div>}
      {data && (
        <article>
          <h2>{data.title}</h2>
          <p>Category: {data.category}</p>
          <p>Autor: {data.author}</p>
          <div>{data.body}</div>
          <div className="buttons">
            <button onClick={handleClickDelete}>Usuń</button>
            <button onClick={handleToggleEditForm}>Edytuj</button>
          </div>
        </article>
      )}

      {isEditFormVisible && (
        <EditForm initialData={data} onSubmit={handleEditSubmit} />
      )}
    </div>
  );
};

export default BlogDetails;
