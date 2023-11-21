import React from 'react';
import './Home.scss';
import Header from '../../components/header/Header';
import CityComponent from '../../components/city/CityComponent';
import HotelList from '../../components/hotelList/HotelList';
import HotelType from '../../components/hotelType/HotelType';

function Home() {
   return (
      <>
         <Header></Header>
         <main>
            <CityComponent></CityComponent>
            <HotelType></HotelType>
            <HotelList></HotelList>
         </main>
      </>
   );
}

export default Home;
