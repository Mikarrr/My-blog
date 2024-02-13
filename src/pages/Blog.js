import BlogHeader from "../components/Blog/BlogHeader";
import BlogList from "../components/Blog/BlogList";
import useFetchBlog from "../components/UseFetch/useFetchBlog";

const Home = () => {
  const { data, isPending, error } = useFetchBlog(
    "http://localhost:8000/blogs"
  );
  return (
    <div className="blog">
      <BlogHeader />
      {error && <div className="error">{error}</div>}
      {isPending && <div className="load">Loading...</div>}
      {data && <BlogList blogs={data} title="All Blogs" />}
    </div>
  );
};

export default Home;
