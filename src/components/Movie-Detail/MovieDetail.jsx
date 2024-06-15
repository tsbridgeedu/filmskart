import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function MovieDetail() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [relatedMovies, setRelatedMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const BASE_URL = import.meta.env.VITE_NODE_URL;



  useEffect(() => {
    async function getMovieData() {
      try {
        setLoading(true);
        
        const response = await fetch(`${BASE_URL}/movie-data`);
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const movieData = await response.json();
        const movieList = movieData;
        const selectedMovie = movieList.find(movie => movie.id === parseInt(id));

        setMovie(selectedMovie);
        setRelatedMovies(movieList.filter(movie => movie.id !== parseInt(id)));
        
      } catch (error) {
        console.error("Error fetching movie data:", error);
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    getMovieData();
  }, [id, BASE_URL]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching movie data: {error.message}</div>;
  }

  if (!movie) {
    return <div>No movie found</div>;
  }

  return (
    <>
      <main className="sm:p-5">
        <section className="relative flex items-center justify-center">
          <div className="relative md:w-[500px] w-full h-[350px] md:h-[500px] sm:rounded-l-lg shadow-md">
            <img
              src={`/${movie.img}`}
              className="w-[500px] h-[350px] md:h-[500px] sm:rounded-l-lg"
              alt="product-image"
            />
          </div>
          <div className="bottom-0 left-0 absolute md:relative flex w-full sm:w-[600px] sm:h-[500px] flex-wrap sm:flex-col gap-2 bg-red-300 bg-opacity-30 backdrop-blur-lg sm:rounded-r-lg justify-center items-center text-2xl md:text-xl font-semibold md:font-normal md:items-start p-6">
            <p className="md:mb-5 flex gap-2">
              <span className="text-yellow-400">•</span>
              <strong className="hidden md:block text-red-900">Movie Name:</strong>{" "}
              {movie.title}
            </p>
            <p className="md:mb-5 flex gap-2">
              <span className="text-yellow-400">•</span>
              <strong className="hidden md:block text-red-900">Description:</strong>{" "}
              {movie.description}
            </p>
            <p className="md:mb-5 gap-2 flex">
              <span className="text-yellow-400">•</span>
              <strong className="hidden md:block text-red-900">Ratings:</strong>{" "}
              {movie.rating}/10
            </p>
            
          </div>
        </section>
      </main>

         <div className="mt-8 flex justify-center items-center flex-col w-full mb-8">
        <h2 className="text-2xl font-bold mb-4">Related Movies</h2>
     <div className="w-[380px] sm:w-full grid justify-evenly items-center sm:grid-cols-4 lg:grid-cols-5 grid-cols-2  gap-4 p-6">
          {relatedMovies.map(item => (
            <div key={item.id} className="bg-white w-full h-[250px] lg:w-[300px] sm:h-[350px] rounded-lg shadow-lg overflow-hidden">
              <img
                src={`/${item.img}`}
                alt={`Related Movie ${item.title}`}
                className="object-cover h-[250px] sm:h-[350px] lg:w-[300px] w-full rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default MovieDetail;




