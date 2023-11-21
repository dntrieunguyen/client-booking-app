import React, { useEffect } from 'react';

import HotelDetail from '../../components/hotelDetail/HotelDetail';

function Detail() {
   useEffect(() => {
      window.scrollTo({
         top: 0,
         behavior: 'smooth',
      });
   }, []);
   return <HotelDetail></HotelDetail>;
}

export default Detail;
