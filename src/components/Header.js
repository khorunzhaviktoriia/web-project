function Header({searchTerm, setSearchTerm, setIsLoginModalOpen}) {
  return (
    <header className="bg-white shadow fixed-top w-100 z-10">
      <div className="container py-3 d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center me-2">
          <h1 className="fs-3 fw-bold text-pink">MovieLand</h1>
        </div>
        
        <div className="w-50 position-relative me-2">
          <input
            type="text"
            placeholder="Пошук фільму..."
            className="form-control py-2 px-4 rounded-pill"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <button className="btn btn-pink px-3 py-2 rounded-pill" onClick={() => setIsLoginModalOpen(true)}>
          Зареєструватися
        </button>
      </div>
    </header>
  );
};

export default Header;