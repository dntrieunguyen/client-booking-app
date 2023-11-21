import React from 'react';
import './Register.scss';
import { Link } from 'react-router-dom';

function Register() {
   return (
      <main>
         <section className="form__container">
            <h2>Register</h2>
            <form action="">
               <div className="form__items">
                  <label htmlFor="">Username</label>
                  <input type="text" name="username" />
               </div>
               <div className="form__items">
                  <label htmlFor="">Password</label>
                  <input type="password" name="password" />
               </div>
               <Link to="/login">
                  <button>Create account</button>
               </Link>
            </form>
         </section>
      </main>
   );
}

export default Register;
