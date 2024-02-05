import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Navigation from "./components/Navigation";
import NotFound from "./components/NotFound";

import Blog from "./pages/Blog";
import Create from "./pages/Create";
import BlogDetails from "./components/BlogDetails";

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" element={<Blog />} />
          <Route path="/blog" element={<Navigate to="/" />} />
          <Route path="/create" element={<Create />} />
          <Route path="/blogs/category/:category" element={<Blog />} />
          <Route path="/blogs/:id" element={<BlogDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
