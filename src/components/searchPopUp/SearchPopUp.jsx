import React from 'react';
import './SearchPopUp.scss';
const SearchPopUp = () => {
   return (
      <section className="search__container">
         <h2>Search</h2>
         <div className="searchForm">
            <form className="searchForm__info">
               <div className="searchF__dest">
                  <label htmlFor="" name="destination">
                     Destination
                  </label>
                  <input type="text" name="destination" />
               </div>
               <div className="searchF__checkin">
                  <label htmlFor="" name="searchF__checkin">
                     Check-in Date
                  </label>
                  <input type="text" name="searchF__checkin" disabled />
               </div>
            </form>
            <h3>Option</h3>
            <form action="" className="searchForm_option">
               <div className="searchForm_optItems">
                  <label htmlFor="">Min price per night</label>
                  <input name="min" type="number" />
               </div>
               <div className="searchForm_optItems">
                  <label htmlFor="">Max price per night</label>
                  <input name="max" type="number" />
               </div>
               <div className="searchForm_optItems">
                  <label htmlFor="">Adult</label>
                  <input name="adult" type="number" />
               </div>
               <div className="searchForm_optItems">
                  <label htmlFor="">Children</label>
                  <input name="children" type="number" />
               </div>
               <div className="searchForm_optItems">
                  <label htmlFor="">Room</label>
                  <input name="room" type="number" />
               </div>
            </form>
         </div>
         <button>Search</button>
      </section>
   );
};

export default SearchPopUp;
