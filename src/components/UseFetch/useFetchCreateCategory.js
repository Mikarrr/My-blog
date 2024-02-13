import { useState } from "react";
import { useNavigate } from "react-router-dom";

const UseFetchCreateCategory = (url) => {
  const [title, setTitle] = useState("");
  const [isPending, setIsPending] = useState(false);
  const history = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const category = { title };

    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(category),
    }).then(() => {
      console.log("new blog added");
      setIsPending(false);
      history("/");
    });
  };

  return { title, setTitle, isPending, handleSubmit };
};

export default UseFetchCreateCategory;
