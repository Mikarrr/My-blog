import UseFetchCreateCategory from "../UseFetch/useFetchCreateCategory";

const CategoryForm = () => {
  const { title, setTitle, isPending, handleSubmit } = UseFetchCreateCategory(
    "http://localhost:8000/category"
  );
  return (
    <div className="create-list">
      <div className="create-form">
        <form onSubmit={handleSubmit}>
          <label>Category:</label>
          <input
            type="text"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          {!isPending && <button>Add Category</button>}
          {isPending && <button>Adding Category...</button>}
        </form>
      </div>
    </div>
  );
};

export default CategoryForm;
