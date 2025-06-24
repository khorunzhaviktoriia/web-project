import './App.css';
import React, { useState, useEffect } from 'react';
import Header from './components/Header.js';
import MovieGrid from './components/MovieGrid.js';
import SectionForQuiz from './components/SectionForQuiz.js';
import LoginModal from './components/LoginModal.js';
import QuizModal from './components/QuizModal.js';
import ToastMessage from './components/ToastMessage.js';
import MovieModal from './components/MovieModal.js'
import Footer from './components/Footer.js';
import Quote from './components/Quote.js';

function App() { 
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [toastMessage, setToastMessage] = useState('');
  const [showToast, setShowToast] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [isQuizActive, setIsQuizActive] = useState(false);
  const [currentQuizQuestion, setCurrentQuizQuestion] = useState(0);
  const [quizScore, setQuizScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [quote, setQuote] = useState({ text: '', movie: '' });
  const [quizQuestions, setQuizQuestions] = useState([]);
 

  useEffect(function () {
    function fetchMovies(showToastOnUpdate = false) {
      setIsLoading(true);
      console.log('Check fetchMovies')

      fetch('http://localhost:9999/movies')
        .then(function (response) {
          if (!response.ok) {
            throw new Error('Не вийшло отримати дані з сервера');
          }
          return response.json();
        })

        .then(function (data) {
          setMovies(data);

          if (showToastOnUpdate) {
            setToastMessage('Список фільмів оновлено!');
            setShowToast(true);
            setTimeout(function () {
              setShowToast(false);
            }, 3000);
          }
        })

        .catch(function (error) {
          console.error('Помилка отримання фільмів:', error);
          setToastMessage('Не вдалося завантажити фільми');
          setShowToast(true);

          setTimeout(function () {
            setShowToast(false);
          }, 3000);
        })
        
        .finally(function () {
          setIsLoading(false);
        });
    }

    fetchMovies(true);

    const intervalId = setInterval(function () {
      fetchMovies(false);
    }, 30000);
    
    return function () {
      clearInterval(intervalId);
    };
  }, []);

  function handleMovieSelect(movie) {
    setSelectedMovie(movie);
    setIsModalOpen(true);
  }

  function filterMovies(movies, searchTerm) {
    return movies.filter(function(movie) {
      return (
        movie.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        movie.genre.some(function(g) {
          return g.toLowerCase().includes(searchTerm.toLowerCase());
        })
      );
    });
  }

  const filteredMovies = filterMovies(movies, searchTerm);

  function handleLogin(e) {
    e.preventDefault();
    setUsernameError('');
    setPasswordError('');
    let isValid = true;

    if (!username.trim()) {
      setUsernameError("Введіть emai або ім'я");
      isValid = false;
    }

    if (!password) {
      setPasswordError('Введіть пароль');
      isValid = false;
    } else if (password.includes(' ')) {
      setPasswordError('Пароль не може містити пробіли');
      isValid = false;
    } else if (password.length < 6) {
      setPasswordError('Пароль повинен мати мінімум 6 знаків');
      isValid = false;
    } else {
      setPasswordError('');
    }

    if (isValid) {
      fetch('http://localhost:9999/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      })
        .then(response => response.json())
        .then(data => {
          if (data.success) {
            setIsLoginModalOpen(false);
            setToastMessage(data.message);
            setShowToast(true);
            setTimeout(function () {
              setShowToast(false);
            }, 3000);
            setUsername('');
            setPassword('');
          } else {
            setUsernameError(data.error);
            setPasswordError(data.error);
          }
        })
        .catch(() => {
          setUsernameError('Помилка серверу');
          setPasswordError('Помилка серверу');
        });
    }
  }

  function handleQuizAnswer(answer) {
    if (answer === quizQuestions[currentQuizQuestion].correctAnswer) {
      setQuizScore(quizScore + 1);
    }

    if (currentQuizQuestion < quizQuestions.length - 1) {
      setCurrentQuizQuestion(currentQuizQuestion + 1);
      setSelectedOption('')
    } else {
      setToastMessage(`Тест пройдено! Твій рахунок: ${quizScore + (answer === quizQuestions[currentQuizQuestion].correctAnswer ? 1 : 0)}/${quizQuestions.length}`);
      setShowToast(true);

      setTimeout(function () {
        setShowToast(false);
        setIsQuizActive(false);
        setCurrentQuizQuestion(0);
        setQuizScore(0);
        setSelectedOption('')
      }, 3000);

      setTimeout(function () {
        setIsQuizActive(false);
      }, 500);
    }
  }

  useEffect(function () {
    function fetchQuote() {
      setIsLoading(true);
      console.log('Check fetchQuote')

      fetch('http://localhost:9999/quote')
        .then(function (response) {
          if (!response.ok) {
            throw new Error('Не вдалося отримати цитату');
          }
          return response.json();
        })
        .then(function (data) {
          setQuote(data);
        })
        .catch(function (error) {
          console.error('Помилка отримання цитати:', error);
          setToastMessage('Не вдалося завантажити цитату');
          setShowToast(true);
        })
        .finally(function () {
          setIsLoading(false);
        });
    }

    fetchQuote(true);

    const intervalId = setInterval(function () {
      fetchQuote(false);
    }, 30000);

    return function () {
      clearInterval(intervalId);
    };
  }, []);

  useEffect(() => {
  fetch('http://localhost:9999/quiz')
    .then((response) => response.json())
    .then((data) => {
      setQuizQuestions(data);
    })
    .catch((error) => {
      console.error('Помилка завантаження квізу:', error);
      setToastMessage('Не вдалося завантажити питання для квізу');
      setShowToast(true);
      setTimeout(function () {
        setShowToast(false);
      }, 3000);
    });
  }, []);

  return (
    <div className="min-vh-100 bg-light">
      <Header 
        searchTerm={searchTerm} 
        setSearchTerm={setSearchTerm} 
        setIsLoginModalOpen={setIsLoginModalOpen}
      />
      <SectionForQuiz setIsQuizActive={setIsQuizActive} /> 
      <div className='container my-5'>
        <Quote
          isLoading={isLoading}
          quote={quote}      
        />
        <MovieGrid 
          movies={filteredMovies} 
          isLoading={isLoading} 
          handleMovieSelect={handleMovieSelect} 
        />
      </div>
      <LoginModal 
        isOpen={isLoginModalOpen} 
        onClose={() => setIsLoginModalOpen(false)} 
        username={username} 
        setUsername={setUsername} 
        password={password} 
        setPassword={setPassword} 
        usernameError={usernameError} 
        passwordError={passwordError} 
        handleLogin={handleLogin} 
      />
      <QuizModal 
        isOpen={isQuizActive} 
        onClose={() => setIsQuizActive(false)} 
        quizQuestions={quizQuestions} 
        currentQuizQuestion={currentQuizQuestion} 
        quizScore={quizScore} 
        handleQuizAnswer={handleQuizAnswer} 
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
      />
      <ToastMessage show={showToast} message={toastMessage} />
      <MovieModal 
        isOpen={isModalOpen} 
        movie={selectedMovie} 
        onClose={() => setIsModalOpen(false)} 
      />
      <Footer />
    </div>
  );
};


export default App;