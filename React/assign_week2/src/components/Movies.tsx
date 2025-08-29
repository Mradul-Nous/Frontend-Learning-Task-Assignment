import { useEffect, useState } from "react";
import type { RootState, AppDispatch } from "../store";
import { useDispatch, useSelector } from "react-redux";
import { setMovies } from "../features/movieSlice";
import Movie from "./Movie";

export default function Movies() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch<AppDispatch>();

  const { allmovies, searchTerm, category } = useSelector(
    (state: RootState) => state.movies
  );

  useEffect(() => {
    // simulating api call using setTiemouts , As the public movies api are block by IT
    setTimeout(() => {
      fetch("/movies.json")
        .then((res) => res.json())
        .then((data) => {
          dispatch(setMovies(data));
          setLoading(false);
        });
    }, 1500);
  }, [dispatch]);

 if (loading)
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <button
        disabled
        className="flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded opacity-70 cursor-not-allowed"
      >
        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
        Loading...
      </button>
    </div>
  );

  // Filtering movies based on search or Category 
  const filteredMovies = allmovies.filter((m) => {
    const matchSearch = m.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchCategory = category === "all" ? true : m.category === category;
    return matchSearch && matchCategory;
  });

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">🎬 Movies List</h2>

      {filteredMovies.length === 0 ? (
        <p className="text-gray-300">No movies found...</p>
      ) : (
        <div className="flex flex-wrap gap-5 ">
          {filteredMovies.map((movie) => 
                <Movie key={movie.id} movie={movie}/>
          )}
        </div>
      )}
    </div>
  );
}
