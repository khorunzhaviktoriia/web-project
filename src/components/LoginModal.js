function LoginModal({ isOpen, onClose, username, setUsername, password, setPassword, usernameError, passwordError, handleLogin }) {
  if (!isOpen) return null;

  return (
    <div className="modal fade show d-block" tabIndex={-1} style={{ backgroundColor: 'rgba(0,0,0,0.75)' }}>
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content rounded shadow-lg">
          <div className="modal-body p-4">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h2 className="fs-4 fw-bold text-dark">Увійти до облікового запису</h2>
              <button 
                onClick={onClose}
                className="btn text-muted"
              >
                Повернутись
              </button>
            </div>
            
            <form onSubmit={handleLogin}>
              <div className="mb-3">
                <label htmlFor="username" className="form-label text-dark">Email/Ім'я</label>
                <input
                  type="text"
                  id="username"
                  className={`form-control ${usernameError ? 'border-danger' : ''} rounded text-sm`}
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                {usernameError && <p className="text-danger small mt-1">{usernameError}</p>}
              </div>
              
              <div className="mb-4">
                <label htmlFor="password" className="form-label text-dark">Пароль</label>
                <input
                  type="password"
                  id="password"
                  className={`form-control ${passwordError ? 'border-danger' : ''} rounded text-sm`}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {passwordError && <p className="text-danger small mt-1">{passwordError}</p>}
              </div>
              
              <div className="d-flex justify-content-between align-items-center mb-4">
                <div className="form-check">
                  <input
                    type="checkbox"
                    id="remember"
                    className="form-check-input"
                  />
                  <label htmlFor="remember" className="form-check-label text-dark">
                    Запам'ятати мене
                  </label>
                </div>
                <a href="#" className="text-pink small text-decoration-none">Забули пароль?</a>
              </div>
              
              <button
                type="submit"
                className="btn btn-pink w-100 rounded-pill"
              >
                Увійти
              </button>
            </form>
                        
            <p className="text-center mt-4 text-muted">
              Немає облікового запису?{' '}
              <a href="#" className="text-pink text-decoration-none">Зареєструватися</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;