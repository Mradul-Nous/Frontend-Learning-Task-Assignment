

interface MovieProps {
  movie: {
    id: string | number;
    poster: string;
    title: string;
    year: string | number;
    rating: string | number;
  };
}

function Movie({ movie }: MovieProps) {
  return (
        <div
              key={movie.id}
              className="w-44 text-center bg-black shadow-lg rounded-lg p-2"
            >
              <img
                src={movie.poster}
                alt={movie.title}
                className="w-full h-56 object-cover rounded-md"
              />
              <h4 className="mt-2 font-semibold">{movie.title}</h4>
              <p className="text-gray-600 text-sm">
                {movie.year} ⭐ {movie.rating}
              </p>
         </div>
  )
}

export default Movie