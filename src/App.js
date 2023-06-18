import './App.scss';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUpForm from './components/form/signupForm/SignUpForm';
import LoginForm from './components/form/loginForm/LoginForm';

function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route path="/" element={<SignUpForm/>}/>
        <Route path="login" element={<LoginForm/>}/>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
