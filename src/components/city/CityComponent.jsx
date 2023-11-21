import React from 'react';
import './CityComponent.scss';
import citiData from '../../data/city.json';

const CityComponent = () => {
   return (
      <section className="city">
         {citiData.map((item, index) => (
            <div key={index} className="city__items">
               <img src={item.image} alt="" />
               <div className="overlay"></div>
               <div className="city__text">
                  <h2>{item.name}</h2>
                  <p>{item.subText}</p>
               </div>
            </div>
         ))}
      </section>
   );
};

export default CityComponent;
