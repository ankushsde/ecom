import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import Signup from './features/auth/components/Signup';
function App() {
  return (
    <div className="App">
      <header className="App-header">
   <Home></Home>      
    </header>
    </div>
  );
}

export default App;
