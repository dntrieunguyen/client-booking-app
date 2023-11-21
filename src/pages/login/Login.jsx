import React from 'react';
import { Link } from 'react-router-dom';
import './Login.scss';

function Login() {
   return (
      <main>
         <section className="form__container">
            <h2>Login</h2>
            <form action="">
               <div className="form__items">
                  <label htmlFor="">Username</label>
                  <input type="text" name="username" />
               </div>
               <div className="form__items">
                  <label htmlFor="">Password</label>
                  <input type="password" name="password" />
               </div>
               <Link to="/">
                  <button>Login</button>
               </Link>
            </form>
         </section>
      </main>
   );
}

export default Login;
