

import Movies from "./components/Movies";
import Search from "./components/Search";
import Category from "./components/Category";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 p-6 flex flex-col items-center">
      <h1 className="text-4xl font-extrabold text-white mb-8 drop-shadow-md">
        🎬 Movies App
      </h1>
      <div className="w-full max-w-xl mb-6">
        <Search />
      </div>
      <div className="w-full max-w-xl mb-6">
        <Category />
      </div>
      <div className="w-full max-w-7xl">
        <Movies />
      </div>
    </div>
  );
}
