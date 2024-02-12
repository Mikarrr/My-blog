import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useFetchCategory from "./useFetchCategory";

const Filter = ({ onFilterChange }) => {
  const {
    data: categories,
    isPending,
    error,
  } = useFetchCategory("http://localhost:8000/category");

  return (
    <nav className="blog-filter">
      {error && <div className="error">{error}</div>}
      {isPending && <div className="load">Loading...</div>}
      <ul>
        {categories && (
          <>
            <li key="all">
              <Link to="/blog" onClick={() => onFilterChange("All")}>
                All
              </Link>
            </li>

            {categories.map((category) => (
              <li key={category.id}>
                <Link
                  to={`/blogs/category/${category.title}`}
                  onClick={() => onFilterChange(category.title)}
                >
                  {category.title}
                </Link>
              </li>
            ))}
          </>
        )}
      </ul>
    </nav>
  );
};

export default Filter;
