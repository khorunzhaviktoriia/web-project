function QuizModal({ isOpen, onClose, quizQuestions, currentQuizQuestion, quizScore, handleQuizAnswer }) {
  if (!isOpen) return null;

  return (
    <div className="modal fade show d-block" tabIndex={-1} style={{ backgroundColor: 'rgba(0,0,0,0.75)' }}>
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content rounded shadow-lg">
          <div className="modal-body p-4">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h2 className="fs-4 fw-bold text-dark">Тест</h2>
              <button 
                onClick={onClose}
                className="btn text-muted"
              >
                Вийти
              </button>
            </div>
            
            <div className="mb-4">
              <div className="progress rounded-pill" style={{ height: '0.5rem' }}>
                <div 
                  className="progress-bar bg-primary" 
                  style={{ width: `${((currentQuizQuestion + 1) / quizQuestions.length) * 100}%` }}
                ></div>
              </div>
              <p className="text-end small text-muted mt-1">
                Питання {currentQuizQuestion + 1} з {quizQuestions.length}
              </p>
            </div>
            
            <div className="mb-4">
              <h3 className="fs-5 fw-semibold text-dark mb-3">
                {quizQuestions[currentQuizQuestion].question}
              </h3>
              
              <div className="d-flex flex-column gap-2">
                {quizQuestions[currentQuizQuestion].options.map((option, index) => (
                  <div key={index} className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="quizOption"
                      id={`option-${index}`}
                      value={option}
                      onChange={() => handleQuizAnswer(option)}
                    />
                    <label className="form-check-label" htmlFor={`option-${index}`}>
                      {option}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="d-flex justify-content-between align-items-center">
              <p className="text-muted">Рахунок: {quizScore}/{currentQuizQuestion + 1}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizModal;

