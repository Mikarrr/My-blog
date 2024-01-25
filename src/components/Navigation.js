import { Link } from "react-router-dom";

const navLinks = [
  {
    title: "Blog",
    path: "/blog",
  },
  {
    title: "Create New",
    path: "/create",
  },
];

const Navigation = () => {
  return (
    <nav className="site-navigation">
      <span>My Blog</span>
      <ul>
        {navLinks.map((link, index) => (
          <li key={index}>
            <Link to={link.path}>{link.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
