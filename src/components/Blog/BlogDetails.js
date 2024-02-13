import { useParams } from "react-router";
import useFetchBlog from "../UseFetch/useFetchBlog";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import EditForm from "./EditForm";

const BlogDetails = () => {
  const { id } = useParams();
  const { data, error, isPending } = useFetchBlog(
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
        <>
          <div className="blog-header">
            <h2>{data.title}</h2>
            <p className="category">{data.category}</p>
            <p>Autor: {data.author}</p>
          </div>
          <div className="blog-body">
            <div>{data.body}</div>
            <div className="buttons">
              <button onClick={handleClickDelete}>Usuń</button>
              <button onClick={handleToggleEditForm}>Edytuj</button>
            </div>
          </div>
        </>
      )}

      {isEditFormVisible && (
        <EditForm initialData={data} onSubmit={handleEditSubmit} />
      )}
    </div>
  );
};

export default BlogDetails;
