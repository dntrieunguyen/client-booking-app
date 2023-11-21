import React from 'react';
import './Header.scss';
import headerList from '../../data/navBar.json';
import Button from '../button/Button';
import HeaderSearch from './HeaderSearch';

function Header() {
   return (
      <header>
         <div className="header__content">
            <div className="header__list">
               {headerList.map((item, index) => (
                  <div
                     key={index}
                     className={
                        item.active
                           ? 'header__listItem active'
                           : 'header__listItem'
                     }
                  >
                     <i className={`fa-solid ${item.icon}`}></i>
                     <p>{item.type}</p>
                  </div>
               ))}
            </div>
            <div className="header__title">
               <h2>A lifetime of discounts? It's Genius.</h2>
               <p>
                  Get rewarded for your travels – unlock instant savings of 10%
                  or more with a free Lamabooking account
               </p>
            </div>
            <div className="header__btn">
               <Button>Sign In/Register</Button>
            </div>

            <HeaderSearch></HeaderSearch>
         </div>
      </header>
   );
}

export default Header;
