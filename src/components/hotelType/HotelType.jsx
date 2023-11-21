import React from 'react';
import './HotelType.scss';
import hotelTypeData from '../../data/type.json';
const HotelType = () => {
   return (
      <>
         <h2>Browse by property type</h2>
         <section className="hotelType">
            {hotelTypeData.map((item, index) => (
               <div key={index} className="hotelType__items">
                  <div className="hotelType__content">
                     <img src={item.image} alt="" />
                     <div className="hotelType__text">
                        <h3>{item.name}</h3>
                        <p>{item.count} hotels</p>
                     </div>
                  </div>
               </div>
            ))}
         </section>
      </>
   );
};

export default HotelType;
