function MovieModal({ isOpen, movie, onClose }) {
  if (!isOpen || !movie) return null;

  return (
    <div className="modal fade show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.75)' }}>
      <div className="modal-dialog modal-xl modal-dialog-scrollable">
        <div className="modal-content rounded shadow-lg">
          <div className="modal-body position-relative p-0">
            <button 
              onClick={onClose}
              className="btn position-absolute top-0 end-0 m-3 shadow"
            >
              Вийти
            </button>
            
            <div className="row">
              <div className="col-md-4 p-5">
                <img 
                  src={movie.poster} 
                  alt={movie.title} 
                  className="img-fluid rounded shadow"
                />
              </div>
              
              <div className="col-md-7 p-4">
                <h2 className="fs-3 fw-bold text-dark mb-2">{movie.title}</h2>
                <p className="text-muted mb-4">{movie.year}</p>
                
                <div className="mb-4">
                  <h3 className="fs-5 fw-semibold text-dark mb-2">Сюжет</h3>
                  <p className="text-secondary">{movie.plot}</p>
                </div>
                
                <div className="mb-4">
                  <h3 className="fs-5 fw-semibold text-dark mb-2">Режисер</h3>
                  <p className="text-secondary">{movie.director}</p>
                </div>
                
                <div className="mb-4">
                  <h3 className="fs-5 fw-semibold text-dark mb-2">Актори</h3>
                  <div className="d-flex flex-wrap gap-2">
                    {movie.actors.map((actor, index) => (
                      <div key={index} className="bg-pink text-white px-3 py-1 rounded-pill">
                        {actor}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="mb-4">
                  <h3 className="fs-5 fw-semibold text-dark mb-2">Жанр</h3>
                  <div className="d-flex flex-wrap gap-2">
                    {movie.genre.map((genre, index) => (
                      <div key={index} className="bg-pink-for-modal text-white px-3 py-1 rounded-pill">
                        {genre}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieModal;