import React from 'react';
import './SearchList.scss';
import searchData from '../../data/search.json';
const SearchList = () => {
   return (
      <section className="searchList">
         {searchData.map((item, index) => (
            <div key={index} className="searchl__items">
               <img src={item.image_url} alt="" />
               <div className="searchl__text">
                  <h2>{item.name}</h2>
                  <p>{item.distance} from center</p>
                  <span>{item.tag}</span>
                  <p>{item.description}</p>
                  <p>{item.type}</p>
                  {item.free_cancel && (
                     <>
                        <p>Free Cancellation</p>
                        <p>
                           You can cancel later, so lock in this greate price
                           today!
                        </p>
                     </>
                  )}
               </div>
               <div className="searchl__info">
                  <div className="searchl__irating">
                     <p>{item.rate_text}</p>
                     <span>{item.rate}</span>
                  </div>

                  <div className="searchl__iaction">
                     <p>${item.price}</p>
                     <p>Include taxes and fees</p>
                     <button>See avaiability</button>
                  </div>
               </div>
            </div>
         ))}
      </section>
   );
};

export default SearchList;
