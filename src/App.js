import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';
import Home from './Components/Pages/Home';
import SigninPage from './Components/Pages/Signin';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' Component={Home} exact />
        <Route path='/Signin' Component={SigninPage} exact />
      </Routes> 
    </Router>
  ); 
}

export default App;
