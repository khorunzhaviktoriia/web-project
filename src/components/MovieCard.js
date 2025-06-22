const MovieCard = ({ movie, onSelect }) => {

  return (
    <div className="col">
      <div className="card shadow h-100">
        <div className="position-relative overflow-hidden" style={{ height: '450px' }}>
          <img 
            src={movie.poster} 
            alt={movie.title} 
            className="card-img-top object-fit-cover h-100"
          />
          <div className="position-absolute top-0 end-0 bg-dark bg-opacity-50 text-white px-2 py-1 rounded fs-1.5">
            {movie.year}
          </div>
        </div>
        <div className="card-body">
          <h3 className="card-title fs-5 fw-semibold mb-2 text-dark">{movie.title}</h3>
          <button 
            onClick={() => onSelect(movie)}
            className="btn btn-pink w-100 rounded-pill"
          >
            Подивитися деталі...
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;