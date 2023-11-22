import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { amountSlice } from '../../redux/reducer/amountSlice';

function AmountExpand({ isShowAmountExpand }) {
   const dispatch = useDispatch();
   const amount = useSelector(state => state.amountPick);
   const handleOnChange = e => {
      const { name, value } = e.target;
      dispatch(amountSlice.actions.UPDATE_AMOUNT({ [name]: value }));
   };

   return (
      <div
         className={
            isShowAmountExpand
               ? 'header__AmountExpand'
               : 'header__AmountExpand invisible'
         }
      >
         <div className="header__AmountExpandItems">
            <span>Adult</span>
            <div className="header__AmountExpandAction">
               <button
                  onClick={() => dispatch(amountSlice.actions.PLUS_ADULT())}
               >
                  +
               </button>
               <input
                  type="text"
                  name="adult"
                  onChange={handleOnChange}
                  value={amount.adult}
               />
               <button
                  onClick={
                     amount.adult > 0
                        ? () => dispatch(amountSlice.actions.MINUS_ADULT())
                        : () => {}
                  }
               >
                  -
               </button>
            </div>
         </div>
         <div className="header__AmountExpandItems">
            <span>Children</span>
            <div className="header__AmountExpandAction">
               <button
                  onClick={() => dispatch(amountSlice.actions.PLUS_CHILDREN())}
               >
                  +
               </button>
               <input
                  type="text"
                  name="children"
                  onChange={handleOnChange}
                  value={amount.children}
               />
               <button
                  onClick={
                     amount.children > 0
                        ? () => dispatch(amountSlice.actions.MINUS_CHILDREN())
                        : () => {}
                  }
               >
                  -
               </button>
            </div>
         </div>
         <div className="header__AmountExpandItems">
            <span>Rooms</span>
            <div className="header__AmountExpandAction">
               <button
                  onClick={() => dispatch(amountSlice.actions.PLUS_ROOMS())}
               >
                  +
               </button>
               <input
                  type="text"
                  name="rooms"
                  onChange={handleOnChange}
                  value={amount.rooms}
               />
               <button
                  onClick={
                     amount.rooms > 0
                        ? () => dispatch(amountSlice.actions.MINUS_ROOMS())
                        : () => {}
                  }
               >
                  -
               </button>
            </div>
         </div>
      </div>
   );
}

export default AmountExpand;
