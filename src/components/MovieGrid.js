import MovieCard from './MovieCard';

function MovieGrid({ movies, isLoading, handleMovieSelect }) {
  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="fs-4 fw-bold text-dark">Популярні фільми</h2>
      </div>

      {isLoading ? (
          <p>Завантаження...</p>
      ) : (
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
          {movies.map(movie => (
            <MovieCard key={movie.id} movie={movie} onSelect={handleMovieSelect} />
          ))}
        </div>
      )}
    </div>
  );
};

export default MovieGrid;