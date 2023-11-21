import React, { useState } from 'react';
import Button from '../button/Button';
import { Link } from 'react-router-dom';
import AmountExpand from './AmountExpand';

function HeaderSearch() {
   const [isShowAmountExpand, setIsShowAmountExpand] = useState(false);

   const handleShowAmountExpand = () => {
      setIsShowAmountExpand(!isShowAmountExpand);
   };
   return (
      <>
         <div className="header__search">
            <div className="header__searchInput">
               <i className="fa-solid fa-bed"></i>
               <input type="text" placeholder="Where are you going ?" />
            </div>

            <div className="header__DatePicker">
               <i className="fa-solid fa-calendar"></i>
               <span>06/02/2022</span>
               <span>to</span>
               <span>06/02/2022</span>
            </div>

            <div className="header__Amount">
               <div
                  onClick={handleShowAmountExpand}
                  className="header__AmountInput"
               >
                  <i className="fa-solid fa-person"></i>
                  <span>1 adult</span>
                  <span className="dot">.</span>
                  <span>1 children</span>
                  <span className="dot">.</span>
                  <span>1 rooms</span>
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
