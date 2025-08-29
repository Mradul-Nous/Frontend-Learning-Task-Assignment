import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "../store";
import { setSearchTerm } from "../features/movieSlice";

function Search() {
  const dispatch = useDispatch<AppDispatch>();
  const { searchTerm } = useSelector((state: RootState) => state.movies);

  const [searchValue, setSearchValue] = useState<string>(searchTerm ?? "");

  const handleSearch = () => {
    dispatch(setSearchTerm(searchValue));
  };

  useEffect(()=>{
             if(searchValue==""|| searchValue.length<=0){
              dispatch(setSearchTerm(searchValue));
             }
  },[searchValue])

  return (
    <div className="flex gap-2 items-center mb-4">
      <input
        className="px-3 py-2 border border-gray-300 rounded-lg w-64 
                   placeholder:text-gray-400 placeholder:italic 
                   focus:outline-none focus:ring-2 focus:ring-blue-400"
        placeholder="Search for a movie..."
        type="text"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSearch()} 
      />
      <button
        onClick={handleSearch}
        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
      >
        Search
      </button>
    </div>
  );
}

export default Search;
