import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Shop from './pages/Shop';
import Bag from './pages/Bag';
import Login from './pages/Login';
import About from './pages/About';
import Home from './pages/Home';
import Payment from './pages/Payment';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'

const promise = loadStripe(
  'pk_test_51LzMVwAltI4C59k1zPDFsFaCC0ALiD9U5b1DwOrFQJFG0GVlNqrQGvm1qVLxfPEfI93jZI55D34AnhT19YOUIj7k00Z6EYkj2y')

const App = () => {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {

    auth.onAuthStateChanged(authUser => {
      console.log('the user is >>>', authUser);
      if (authUser) {
dispatch({
  type: 'SET_USER',
  user: authUser
})
      } else {
dispatch({
  type: 'SET_USER',
  user: null
})
      }
    })
  }, [])
  return (
  
    <Router>
    <div className="App">
    <Navbar />
      <Routes>
        <Route path="/" element={[<Home />]} />
        <Route path="/shop" element={[<Shop />]} />
        <Route path="/bag" element={[<Bag />]} />
        <Route path="/login" element={[<Login />]} />
        <Route path="/about" element={[<About />]} />
        <Route path="/payment" element={[
          <Elements stripe={promise}>
        <Payment />
        </Elements>
        ]} />

      </Routes>
</div>
</Router>
  );
}

export default App;
