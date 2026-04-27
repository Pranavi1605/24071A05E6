import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from './pages/login';
import QuestionPage from './pages/questionpage';
import ResultPage from './pages/resultpage';
import ScorePage from './pages/scorepage';
import './App.css';

function AppContent() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/quiz" element={<QuestionPage />} />
        <Route path="/result" element={<ResultPage />} />
        <Route path="/score" element={<ScorePage />} />
      </Routes>
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
