import UseFetchCreate from "../UseFetch/useFetchCreate";

const CreateForm = () => {
  const {
    title,
    body,
    category,
    author,
    setTitle,
    setbody,
    setCategory,
    setAuthor,
    isPending,
    handleSubmit,
    categories,
    categoriesPending,
    categoriesError,
  } = UseFetchCreate("http://localhost:8000/blogs");
  return (
    <div className="create-list">
      <div className="create-form">
        <form onSubmit={handleSubmit}>
          {categoriesError && <div>{categoriesError}</div>}
          {categoriesPending && <div>Loading categories...</div>}
          <label>Blog title:</label>
          <input
            type="text"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label>Blog body:</label>
          <textarea
            required
            value={body}
            onChange={(e) => setbody(e.target.value)}
          ></textarea>
          <label>Category:</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {categories &&
              categories.map((category) => (
                <option key={category.id} value={category.title}>
                  {category.title}
                </option>
              ))}
          </select>
          <label>Blog author:</label>
          <input
            type="text"
            required
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
          {!isPending && <button>Add Blog</button>}
          {isPending && <button>Adding Blog...</button>}
        </form>
      </div>
    </div>
  );
};

export default CreateForm;
