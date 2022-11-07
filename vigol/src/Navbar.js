import React from 'react'
import { Link } from 'react-router-dom'
import { useStateValue } from './StateProvider'
import { auth } from './firebase';

function Navbar() {

    const [{ user }] = useStateValue();

    const handleAuthentication = () => {
        if (user) {
auth.signOut();
        }
    }


  return (
  <nav>
    <ul>
        <li>
            <Link to='/shop'>Shop</Link>
        </li>
        <li>
            <Link to='/bag'>Bag</Link>
        </li>
        <li>
            <Link to='/'>Vigol Worldwide</Link>
        </li>
        <li>
            <Link to={!user && '/login'}>
                <div onClick={handleAuthentication}>
                {user ? 'Logout' : 'Login'}
                </div>
            </Link>
        </li>
        <li>
            <Link to='/about'>About</Link>
        </li>
    </ul>
  </nav>
  )
}

export default Navbar
