import React, { useState } from 'react';
import Button from '../button/Button';
import { Link } from 'react-router-dom';
import AmountExpand from './AmountExpand';
import { useSelector } from 'react-redux';
import DatePicker from '../datePicker/DatePicker';

function HeaderSearch() {
   const [isShowAmountExpand, setIsShowAmountExpand] = useState(false);
   const [isShowDatePicker, setIsShowDatePicker] = useState(false);
   const amount = useSelector(state => state.amountPick);
   const datePick = useSelector(state => state.datePick);

   return (
      <>
         <div className="header__search">
            <div className="header__searchInput">
               <i className="fa-solid fa-bed"></i>
               <input type="text" placeholder="Where are you going ?" />
            </div>

            <div className="header__DatePicker">
               <i className="fa-solid fa-calendar"></i>
               <span onClick={() => setIsShowDatePicker(!isShowDatePicker)}>
                  {datePick.dateStart}
               </span>
               <span>to</span>
               <span onClick={() => setIsShowDatePicker(!isShowDatePicker)}>
                  {datePick.dateEnd}
               </span>

               {isShowDatePicker && (
                  <div className="header__datePickerExpand">
                     <DatePicker></DatePicker>
                  </div>
               )}
            </div>

            <div className="header__Amount">
               <div
                  onClick={() => {
                     setIsShowAmountExpand(!isShowAmountExpand);
                  }}
                  className="header__AmountInput"
               >
                  <i className="fa-solid fa-person"></i>{' '}
                  <span>{amount.adult} adult</span>{' '}
                  <span>{amount.children} children</span>{' '}
                  <span>{amount.rooms} rooms</span>
               </div>
               <AmountExpand
                  isShowAmountExpand={isShowAmountExpand}
               ></AmountExpand>
            </div>

            <div className="header__searchBtn">
               <Link to="/search">
                  <Button>Search</Button>
               </Link>
            </div>
         </div>
      </>
   );
}

export default HeaderSearch;
