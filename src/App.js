import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import Signup from './features/auth/components/Signup';

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import CartPage from './pages/CartPage';
import Checkout from './pages/Checkout';
import ProductDetailPage from './pages/PrdoctDetailPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/login",
    element: <LoginPage></LoginPage>,
  },
  {
    path: "/signup",
    element:  <Signup></Signup>,
  },
  { 
    path:"/cart",
    element: <CartPage></CartPage>
  },
  { 
    path:"/checkout",
    element: <Checkout></Checkout>
  },
  { 
    path:"/product-detail",
    element: <ProductDetailPage></ProductDetailPage>
  },
  
]);

function App() {
  return (
    <div className="App">
     
      <RouterProvider router={router} />

    </div>
  );
}

export default App;
