import React, { useState } from 'react';
import './SearchPopUp.scss';
import { useDispatch, useSelector } from 'react-redux';
import { DatePicker } from '../../components';
import { formSearchSlice } from './formSearchSlice';

const SearchPopUp = () => {
   const [isShowDatePicker, setIsShowDatePicker] = useState(false);

   const datePick = useSelector(state => state.formSearch.datePicker);
   const amount = useSelector(state => state.formSearch.amount);
   const price_per_night = useSelector(state => state.formSearch.price);
   const dispatch = useDispatch();

   const handleOnChange = (actionType, e) => {
      dispatch(
         formSearchSlice.actions[actionType]({
            [e.target.name]: +e.target.value,
         }),
      );
   };

   return (
      <section className="search__container">
         <h2>Search</h2>
         <div className="searchForm">
            <form className="searchForm__info">
               <div className="searchF__dest">
                  <label name="destination">Destination</label>
                  <input type="text" name="destination" />
               </div>
               <div className="searchF__checkin">
                  <label name="searchF__checkin">Check-in Date</label>
                  <input
                     type="text"
                     value={`${datePick.startDate} to ${datePick.endDate}`}
                     onChange={() => {}}
                     onClick={() => setIsShowDatePicker(!isShowDatePicker)}
                  />
                  {isShowDatePicker && (
                     <div className="search__datePickerExpand ">
                        <DatePicker></DatePicker>
                     </div>
                  )}
               </div>
            </form>

            <h3>Option</h3>
            <form action="" className="searchForm_option">
               <div className="searchForm_optItems">
                  <label>Min price per night</label>
                  <input
                     name="min"
                     type="number"
                     min={0}
                     value={price_per_night.min}
                     onChange={e => handleOnChange('UPDATE_PRICE', e)}
                  />
               </div>
               <div className="searchForm_optItems">
                  <label>Max price per night</label>
                  <input
                     name="max"
                     type="number"
                     min={0}
                     value={price_per_night.max}
                     onChange={e => handleOnChange('UPDATE_PRICE', e)}
                  />
               </div>
               <div className="searchForm_optItems">
                  <label>Adult</label>
                  <input
                     name="adult"
                     type="number"
                     value={amount.adult}
                     onChange={e => handleOnChange('UPDATE_AMOUNT', e)}
                     min={0}
                  />
               </div>
               <div className="searchForm_optItems">
                  <label>Children</label>
                  <input
                     name="children"
                     type="number"
                     value={amount.children}
                     onChange={e => handleOnChange('UPDATE_AMOUNT', e)}
                     min={0}
                  />
               </div>
               <div className="searchForm_optItems">
                  <label>Room</label>
                  <input
                     name="rooms"
                     type="number"
                     value={amount.rooms}
                     onChange={e => handleOnChange('UPDATE_AMOUNT', e)}
                     min={0}
                  />
               </div>
            </form>
         </div>
         <button id="button">Search</button>
      </section>
   );
};

export default SearchPopUp;
