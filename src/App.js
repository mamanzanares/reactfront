import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Login from './login/Login';
import Opportunity from './opportunity/Opportunity';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path = "/login" element = {<Login/>} />
      <Route path = "/opportunities" element = {<Opportunity/>} />
      
    </Routes>
    </BrowserRouter>
  );
}

export default App;
