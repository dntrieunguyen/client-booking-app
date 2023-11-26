import React from 'react';
import './Home.scss';
import { CityComponent, Header, HotelList, HotelType } from '../../components';

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
