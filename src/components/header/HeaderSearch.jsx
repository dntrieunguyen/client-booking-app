import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AmountExpand, Button, DatePicker } from '../../components';

function HeaderSearch() {
   const [isShowAmountExpand, setIsShowAmountExpand] = useState(false);
   const [isShowDatePicker, setIsShowDatePicker] = useState(false);
   const amount = useSelector(state => state.formSearch.amount);
   const datePick = useSelector(state => state.formSearch.datePicker);

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
                  {datePick.startDate}
               </span>
               <span>to</span>
               <span onClick={() => setIsShowDatePicker(!isShowDatePicker)}>
                  {datePick.endDate}
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
                  <Button text="Search"></Button>
               </Link>
            </div>
         </div>
      </>
   );
}

export default HeaderSearch;
