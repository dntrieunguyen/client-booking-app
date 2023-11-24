import React, { useEffect, useState } from 'react';

import HotelDetail from '../../components/hotelDetail/HotelDetail';
import FormBooking from '../../components/formBooking/FormBooking';

function Detail() {
   const [isShowForm, setIsShowForm] = useState(false);
   useEffect(() => {
      window.scrollTo({
         top: 0,
         behavior: 'smooth',
      });
   }, []);
   return (
      <>
         <HotelDetail setIsShowForm={setIsShowForm}></HotelDetail>
         {isShowForm && <FormBooking></FormBooking>}
      </>
   );
}

export default Detail;
