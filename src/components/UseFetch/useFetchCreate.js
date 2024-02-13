import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useFetchCategory from "./useFetchCategory";

const UseFetchCreate = (url) => {
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

  return {
    title,
    body,
    category,
    author,
    setTitle,
    setbody,
    setCategory,
    setAuthor,
    isPending,
    handleSubmit,
    categories,
    categoriesPending,
    categoriesError,
  };
};

export default UseFetchCreate;
