import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './questionpage.css';

const questions = [
  {
    question: "What is full form of DBMS?",
    options: ["Database Management System", "Database Mentor System", "Data", "Database Management Software"],
    answer: "Database Management System"
  },
  {
    question: "What is JDK?",
    options: ["Java Developer kit", "Java Design kit", "Java Debug kit", "Java Development Kit"],
    answer: "Java Development Kit"
  },
  {
    question: "What does HTML stand for?",
    options: ["Hyper Text Markup Language", "High Tech Modern Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language"],
    answer: "Hyper Text Markup Language"
  },
  {
    question: "What is OS'?",
    options: ["Operating System", "Operational System ", "Operator device", "Operating Software"],
    answer: "Operating System"
  },
  {
    question: "Which of the following is a popular JavaScript framework for building user interfaces?",
    options: ["React", "Python", "Swift", "Kotlin"],
    answer: "React"
  }
];

const QuestionPage = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const navigate = useNavigate();

  const handleAnswerSelect = (answer) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [currentQuestion]: answer
    });
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSubmit = () => {
    localStorage.setItem('quizAnswers', JSON.stringify(selectedAnswers));
    navigate('/result');
  };

  const isAnswered = selectedAnswers[currentQuestion] !== undefined;

  return (
    <div className="questions-page">
      <div className="quiz-wrapper">
        <div className="progress-section">
          <div className="progress-info">
            <span className="question-counter">Question {currentQuestion + 1} of {questions.length}</span>
            <div className="progress-bar">
              <div 
                className="progress-fill"
                style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>

        <div className="question-card">
          <div className="question-content">
            <h2 className="question-text">{questions[currentQuestion].question}</h2>
            
            <div className="options-container">
              {questions[currentQuestion].options.map((option, index) => (
                <label key={index} className={`option-label ${selectedAnswers[currentQuestion] === option ? 'selected' : ''}`}>
                  <input
                    type="radio"
                    name="answer"
                    value={option}
                    checked={selectedAnswers[currentQuestion] === option}
                    onChange={() => handleAnswerSelect(option)}
                    className="option-input"
                  />
                  <span className="option-text">{option}</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        <div className="navigation-section">
          <button 
            onClick={handlePrevious} 
            disabled={currentQuestion === 0}
            className="nav-btn prev-btn"
          >
            ← Previous
          </button>
          
          <div className="question-status">
            {isAnswered ? (
              <span className="answered-status">✓ Answered</span>
            ) : (
              <span className="unanswered-status">○ Not Answered</span>
            )}
          </div>

          {currentQuestion < questions.length - 1 ? (
            <button onClick={handleNext} className="nav-btn next-btn">
              Next →
            </button>
          ) : (
            <button onClick={handleSubmit} className="nav-btn submit-btn">
              Submit Quiz
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuestionPage;