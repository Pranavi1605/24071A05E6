import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './resultpage.css';

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

const ResultPage = () => {
  const [results, setResults] = useState([]);
  const [score, setScore] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const answers = JSON.parse(localStorage.getItem('quizAnswers') || '{}');
    let correctCount = 0;

    const resultData = questions.map((q, index) => {
      const userAnswer = answers[index];
      const isCorrect = userAnswer === q.answer;
      if (isCorrect) correctCount++;
      return {
        question: q.question,
        userAnswer,
        correctAnswer: q.answer,
        isCorrect
      };
    });

    setResults(resultData);
    setScore(correctCount);
    localStorage.setItem('quizScore', correctCount);
  }, []);

  const handleViewScore = () => {
    navigate('/score');
  };

  return (
    <div className="result-page">
      <div className="result-container">
        <h1>Quiz Results</h1>
        
        <div className="score-display">
          <p>Score: <span>{score}</span> / {questions.length}</p>
        </div>

        <div className="results-list">
          {results.map((result, index) => (
            <div key={index} className={`result-item ${result.isCorrect ? 'correct' : 'wrong'}`}>
              <span className="result-icon">{result.isCorrect ? '✓' : '✗'}</span>
              <span className="result-question">Q{index + 1}: {result.question}</span>
            </div>
          ))}
        </div>

        <button onClick={handleViewScore} className="view-score-btn">View Final Score</button>
      </div>
    </div>
  );
};

export default ResultPage;