import React from 'react';
import './HotelList.scss';
import hotelListData from '../../data/hotel_list.json';
import { Link } from 'react-router-dom';
const HotelList = () => {
   return (
      <>
         <h2>Home guest Love</h2>
         <section className="hotelList">
            {hotelListData.map((item, index) => (
               <div key={index} className="hotelList__items">
                  <img src={item.image_url} alt="" />
                  <div className="hotelList__text">
                     <Link to="/detail">
                        <h3>{item.name}</h3>
                     </Link>
                     <p className="hotelList__city">{item.city}</p>
                     <p className="hotelList__price">
                        Starting from {item.price} $
                     </p>
                     <p className="hotelList__rating">
                        <span>{item.rate}</span> {item.type}
                     </p>
                  </div>
               </div>
            ))}
         </section>
      </>
   );
};

export default HotelList;
