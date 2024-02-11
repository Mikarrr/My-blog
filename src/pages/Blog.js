import BlogList from "../components/BlogList";
import useFetch from "../components/useFetch";

const Home = () => {
  const { data, isPending, error } = useFetch("http://localhost:8000/blogs");
  return (
    <div className="blog">
      {error && <div>{error}</div>}
      {isPending && <div className="load">Loading...</div>}
      {data && <BlogList blogs={data} title="All Blogs" />}
    </div>
  );
};

export default Home;
