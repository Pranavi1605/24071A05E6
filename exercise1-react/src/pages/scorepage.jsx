import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ScorePage = () => {
  const [score, setScore] = useState(0);
  const [userName, setUserName] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const quizScore = localStorage.getItem('quizScore') || 0;
    const name = localStorage.getItem('userName') || 'User';
    setScore(parseInt(quizScore));
    setUserName(name);
  }, []);

  const handleRestart = () => {
    localStorage.removeItem('quizAnswers');
    localStorage.removeItem('quizScore');
    navigate('/');
  };

  const getGrade = (score) => {
    const percentage = (score / 5) * 100;
    if (percentage >= 80) return 'A';
    if (percentage >= 60) return 'B';
    if (percentage >= 40) return 'C';
    return 'F';
  };

  return (
    <div className="score-container">
      <h1>Final Score</h1>
      <div className="score-display">
        <h2>Congratulations, {userName}!</h2>
        <div className="score-circle">
          <span className="score-number">{score}</span>
          <span className="score-total">/5</span>
        </div>
        <p className="grade">Grade: {getGrade(score)}</p>
        <p className="percentage">Percentage: {((score / 5) * 100).toFixed(0)}%</p>
      </div>
      <div className="score-message">
        {score >= 4 ? (
          <p>Excellent work! You have a great knowledge.</p>
        ) : score >= 3 ? (
          <p>Good job! Keep learning and improving.</p>
        ) : (
          <p>Better luck next time! Review the material and try again.</p>
        )}
      </div>
      <button onClick={handleRestart}>Take Quiz Again</button>
    </div>
  );
};

export default ScorePage;