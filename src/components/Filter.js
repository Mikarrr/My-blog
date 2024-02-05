import { Link } from "react-router-dom";

const filterLinks = [
  {
    category: "All",
    path: "/blog",
  },
  {
    category: "Live",
    path: "/blogs/category/live",
  },
  {
    category: "Party",
    path: "/blogs/category/party",
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
