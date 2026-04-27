import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import quizImage from '../assets/Quiz.jpg';
import './login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

   
    if (!email.trim() || !password.trim()) {
      setError('Please fill in all fields');
      return;
    }

    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address');
      return;
    }

    
    localStorage.setItem('userEmail', email);
    localStorage.setItem('userName', email.split('@')[0]);
    navigate('/quiz');
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-image">
          <img src={quizImage} alt="Quiz" className="quiz-image" />
        </div>
        
        <div className="login-form-wrapper">
          <div className="login-form">
            <h1>Welcome to test your knowledge</h1>
            {error && <div className="error-message">{error}</div>}

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="input-field"
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="input-field"
                />
              </div>

              <button type="submit" className="start-quiz-btn">
                Start Quiz
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;