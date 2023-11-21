import React from 'react';
import './Footer.scss';
import footerData from '../../data/footer.json';
import { Link } from 'react-router-dom';

function Footer() {
   return (
      <footer>
         <div className="footer__search">
            <div className="footer__searchContent">
               <h2>Save time,save money</h2>
               <p>Sign up and we'll send the best deals to you</p>
               <div className="footer__input">
                  <input placeholder="Your Email" type="text" />
                  <button>Subcrise</button>
               </div>
            </div>
         </div>

         <div className="footer__info">
            {footerData.map(col => (
               <div key={col.col_number} className="footer__infos">
                  {col.col_values.map((item, index) => (
                     <Link key={index}>{item}</Link>
                  ))}
               </div>
            ))}
         </div>
      </footer>
   );
}

export default Footer;
