function Header({searchTerm, setSearchTerm, setIsLoginModalOpen}) {
  return (
    <header className="bg-white shadow fixed-top w-100">
      <div className="container py-3 d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center me-2">
          <img
            src="/images/hello-kitty-holding-strawberry-cute-icon.png"
            alt="MovieLand Logo"
            style={{ width: '40px', height: '40px', marginRight: '10px' }}   
          />
          <h1 className="fs-3 fw-bold text-pink">MovieLand</h1>
        </div>
        
        <div className="w-50 position-relative me-2">
          <input
            type="text"
            placeholder="Пошук..."
            className="form-control py-2 px-4 rounded-pill"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
            <img
              className="position-absolute"
              src="/images/header-loop.png"
              alt="Search"
              width="30"
              height="30"
              style={{
                top: "15%",
                right: "8px",
                cursor: "pointer"
              }}
            />
        </div>
        
        <button className="btn btn-pink px-3 py-2 rounded-pill d-flex align-items-center gap-2" onClick={() => setIsLoginModalOpen(true)}>
          <img
            src="/images/header-login.svg"
            alt="Register Icon"
            width="20"
            height="20"
          />
          Увійти
        </button>
      </div>
    </header>
  );
};

export default Header;