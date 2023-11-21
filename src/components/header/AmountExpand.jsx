import React from 'react';

function AmountExpand({ isShowAmountExpand }) {
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
               <button name="adult">+</button>
               <input type="text" name="adult" />
               <button>-</button>
            </div>
         </div>
         <div className="header__AmountExpandItems">
            <span>Children</span>
            <div className="header__AmountExpandAction">
               <button>+</button>
               <input type="text" name="children" />
               <button>-</button>
            </div>
         </div>
         <div className="header__AmountExpandItems">
            <span>Rooms</span>
            <div className="header__AmountExpandAction">
               <button>+</button>
               <input type="text" name="rooms" />
               <button>-</button>
            </div>
         </div>
      </div>
   );
}

export default AmountExpand;
