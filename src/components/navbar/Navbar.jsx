import React from 'react';
import './Navbar.scss';
import { Link } from 'react-router-dom';
import { Button } from '../../components';
function Navbar() {
   return (
      <nav>
         <div className="navbar__content">
            <Link to="/" className="navbar__brand">
               Booking Website
            </Link>
            <div className="navbar__btn">
               <Link to="/login">
                  <Button text="Log In"></Button>
               </Link>
               <Link to="/register">
                  <Button text="Register"></Button>
               </Link>
            </div>
         </div>
      </nav>
   );
}

export default Navbar;
