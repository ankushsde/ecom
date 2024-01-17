import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import ProductList from './features/counter copy/ProductList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
   <ProductList></ProductList>      
    </header>
    </div>
  );
}

export default App;
