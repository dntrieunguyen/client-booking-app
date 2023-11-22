import React, { useState } from 'react';
import './SearchPopUp.scss';
import { useDispatch, useSelector } from 'react-redux';
import DatePicker from '../datePicker/DatePicker';
import { amountSlice } from '../../redux/reducer/amountSlice';
const SearchPopUp = () => {
   const [isShowDatePicker, setIsShowDatePicker] = useState(false);
   const datePick = useSelector(state => state.datePick);
   const amount = useSelector(state => state.amountPick);
   const dispatch = useDispatch();

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
                  <input
                     type="text"
                     value={`${datePick.dateStart} to ${datePick.dateEnd}`}
                     name="searchF__checkin"
                     onkeydown="return false"
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
                  <label htmlFor="">Min price per night</label>
                  <input name="min" type="number" min={0} />
               </div>
               <div className="searchForm_optItems">
                  <label htmlFor="">Max price per night</label>
                  <input name="max" type="number" min={0} />
               </div>
               <div className="searchForm_optItems">
                  <label htmlFor="">Adult</label>
                  <input
                     name="adult"
                     type="number"
                     value={amount.adult}
                     onChange={() => {
                        dispatch(amountSlice.actions.UPDATE_AMOUNT());
                     }}
                     min={0}
                  />
               </div>
               <div className="searchForm_optItems">
                  <label htmlFor="">Children</label>
                  <input
                     name="children"
                     type="number"
                     value={amount.children}
                     onChange={() => {
                        dispatch(amountSlice.actions.UPDATE_AMOUNT());
                     }}
                     min={0}
                  />
               </div>
               <div className="searchForm_optItems">
                  <label htmlFor="">Room</label>
                  <input
                     name="room"
                     type="number"
                     value={amount.rooms}
                     onChange={() => {
                        dispatch(amountSlice.actions.UPDATE_AMOUNT());
                     }}
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
