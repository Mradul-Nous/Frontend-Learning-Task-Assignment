
import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../store";
import { setCategory } from "../features/movieSlice";

type CategoryType = "all" | "bollywood" | "hollywood" | "south indian" | "anime";

const categories: CategoryType[] = ["all", "bollywood", "hollywood", "south indian", "anime"];

function Category() {
  const dispatch = useDispatch<AppDispatch>();
  const selectedCategory = useSelector((state: RootState) => state.movies.category);

  return (
    <div className="flex gap-3 mb-4">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => dispatch(setCategory(cat))}
          className={`px-4  rounded-lg transition ${
            selectedCategory === cat
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-800 hover:bg-gray-300"
          }`}
        >
          {cat.toUpperCase()}
        </button>
      ))}
    </div>
  );
}

export default Category;
