import { createSlice, type PayloadAction } from "@reduxjs/toolkit";


export interface Movie {
  id: number;
  title: string;
  year: number;
  rating: number;
  poster: string;
  category: "bollywood" | "hollywood" | "south indian" | "anime";
}


export interface MoviesState {
  allmovies: Movie[];
  searchTerm: string;
  category: "all" | "bollywood" | "hollywood" | "south indian" | "anime";
}


const initialState: MoviesState = {
  allmovies: [],
  searchTerm: "",
  category: "all",
};

// Create slice
export const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setMovies: (state, action: PayloadAction<Movie[]>) => {
      state.allmovies = action.payload;
    },
    setSearchTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload;
    },
    setCategory: (
      state,
      action: PayloadAction<
        "all" | "bollywood" | "hollywood" | "south indian" | "anime"
      >
    ) => {
      state.category = action.payload;
    },
  },
});


export const { setMovies, setSearchTerm, setCategory } = moviesSlice.actions;


export default moviesSlice.reducer;
