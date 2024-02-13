import { useState } from "react";
import { Link } from "react-router-dom";
import Filter from "./Filter";

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
      <Filter onFilterChange={handleFilterChange} />
      <div className="blog-grid">
        {filteredBlogs.map((blog) => (
          <div className="blog-preview" key={blog.id}>
            <Link to={`/blogs/${blog.id}`}>
              <p className="category">{blog.category}</p>
              <h2>{blog.title}</h2>
              <p>
                {blog.body.length > 200
                  ? blog.body.substring(0, 200) + "..."
                  : blog.body}
              </p>
              <p>Written by {blog.author}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
