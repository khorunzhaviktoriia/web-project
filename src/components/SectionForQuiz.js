function SectionForQuiz({ setIsQuizActive }) {
  return (
    <div className="position-relative shadow-lg" style={{ marginTop: '74px'}}>
      <div className="position-absolute w-100 h-100" 
           style={{background: 'linear-gradient(to right, rgba(27, 2, 12, 0.7), transparent)',
                   zIndex: 1
                  }}>
      </div>
      <img 
        src="/images/image-for-quiz.jpg" 
        alt="Featured movies" 
        className="w-100 h-100"
      />
      
      <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center p-3 z-2">
        <div className="text-white text-break" style={{ maxWidth: '550px' }}>
          <h2 className="fs-2 fw-bold mb-3">Відкрий світ неймовірного кіно</h2>
          <p className="fs-5 mb-4">Занурся у нашу добірку найкращих фільмів з усього світу — від культової класики до сучасних хітів, що не залишать байдужим.</p>
          <button 
            onClick={() => setIsQuizActive(true)}
            className="btn btn-pink px-4 py-2 rounded-pill"
          >
            Пройти тест
          </button>
        </div>
      </div>
    </div>
  );
};

export default SectionForQuiz;