import React from 'react';
import detailData from '../../data/detail.json';
import './Detail.scss';

function Detail() {
   return (
      <main className="detail">
         <div className="detail__title">
            <div className="detail__titleText">
               <h2 className="detail__tname">{detailData.name}</h2>
               <p className="detail__taddress">
                  <i className="fa fa-location-pin"></i> {detailData.address}
               </p>
               <p className="detail__tdistance">{detailData.distance}</p>
               <p className="detail__tprice">{detailData.price}</p>
            </div>
            <div className="detail__titleBtn">
               <button>Reverse or Book Now!</button>
            </div>
         </div>
         <div className="detail__Img">
            {detailData.photos.map((item, index) => (
               <img key={index} src={item} alt="" />
            ))}
         </div>
         <div className="detail__Content">
            <div className="detail__CDesc">
               <h4>{detailData.title}</h4>
               <p>{detailData.description}</p>
            </div>
            <div className="detail__CInfo">
               <h3>Perfect for a 9-night stay !</h3>
               <p>
                  Located in the real heart of Krakow, this property has an
                  excelent location score of 9.8!
               </p>

               <h2>
                  <span>${detailData.nine_night_price}</span> (9 nights)
               </h2>

               <button>Reverse or Book Now!</button>
            </div>
         </div>
      </main>
   );
}

export default Detail;
