function QuizModal({ isOpen, onClose, quizQuestions, currentQuizQuestion, quizScore, handleQuizAnswer, selectedOption, setSelectedOption }) {
  if (!isOpen) return null;

  return (
    <div className="modal fade show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.75)' }}>
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content rounded shadow-lg">
          <div className="modal-body p-4">
            <div className="d-flex justify-content-between mb-3">
              <h2 className="fs-4 fw-bold text-dark">Тест</h2>
              <button 
                onClick={onClose}
                className="btn text-muted"
              >
                Вийти
              </button>
            </div>
            
            <div className="mb-4">
              <div className="progress" style={{ height: '14px' }}>
                <div 
                  className="progress-bar bg-pink" 
                  style={{ width: `${((currentQuizQuestion + 1) / quizQuestions.length) * 100}%` }}
                ></div>
              </div>
              <p className="small text-muted mt-1">
                Питання {currentQuizQuestion + 1} з {quizQuestions.length}
              </p>
            </div>
            
            <div className="mb-4">
              <h3 className="fs-5 fw-semibold text-dark mb-3">
                {quizQuestions[currentQuizQuestion].question}
              </h3>
              
              <div key={currentQuizQuestion} className="d-flex flex-column gap-3">
                {quizQuestions[currentQuizQuestion].options.map((option, index) => (
                  <div key={index} className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="quizOption"
                      id={`option-${index}`}
                      value={option}
                      onChange={() => setSelectedOption(option)}
                    />
                    <label className="form-check-label" htmlFor={`option-${index}`}>
                      {option}
                    </label>
                  </div>
                ))}
                <div>
                  <button
                    className="btn btn-pink p-2 px-3"
                    onClick={() => handleQuizAnswer(selectedOption)}
                    disabled={!selectedOption}>
                  Відповісти
                  </button>
                </div>
              </div>
            </div>
            
            <div>
              <p className="text-muted">Рахунок: {quizScore}/{4}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizModal;

