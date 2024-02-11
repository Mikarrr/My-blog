import { Link } from "react-router-dom";

const filterLinks = [
  {
    category: "All",
    path: "/blog",
  },
  {
    category: "Front-end",
    path: "/blogs/category/Front-end",
  },
  {
    category: "Back-end",
    path: "/blogs/category/Back-end",
  },
];

const Filter = ({ onFilterChange }) => {
  return (
    <nav className="blog-filter">
      <ul>
        {filterLinks.map((link, index) => (
          <li key={index}>
            <Link to={link.path} onClick={() => onFilterChange(link.category)}>
              {link.category}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Filter;
