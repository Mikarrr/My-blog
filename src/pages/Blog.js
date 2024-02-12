import BlogList from "../components/BlogList";
import useFetchBlog from "../components/useFetchBlog";

const Home = () => {
  const { data, isPending, error } = useFetchBlog(
    "http://localhost:8000/blogs"
  );
  return (
    <div className="blog">
      {error && <div className="error">{error}</div>}
      {isPending && <div className="load">Loading...</div>}
      {data && <BlogList blogs={data} title="All Blogs" />}
    </div>
  );
};

export default Home;
