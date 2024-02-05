import { useState } from "react";
import { Link } from "react-router-dom";
import Filter from "../components/Filter";

const BlogList = ({ blogs, title }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleFilterChange = (category) => {
    setSelectedCategory(category);
  };

  const filteredBlogs = selectedCategory
    ? blogs.filter((blog) => blog.category === selectedCategory)
    : blogs;

  return (
    <div className="blog-list">
      <h2>{title}</h2>
      <Filter onFilterChange={handleFilterChange} />
      {filteredBlogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
            <h2>{blog.title}</h2>
            <p>Category: {blog.category}</p>
            <p>Written by {blog.author}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
