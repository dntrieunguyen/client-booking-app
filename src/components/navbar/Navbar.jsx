import React from 'react';
import './Navbar.scss';
import Button from '../button/Button';
import { Link } from 'react-router-dom';
function Navbar() {
   return (
      <nav>
         <div className="navbar__content">
            <Link to="/" className="navbar__brand">
               Booking Website
            </Link>
            <div className="navbar__btn">
               <Link to="/login">
                  <Button>Log In</Button>
               </Link>
               <Link to="/register">
                  <Button>Register</Button>
               </Link>
            </div>
         </div>
      </nav>
   );
}

export default Navbar;
