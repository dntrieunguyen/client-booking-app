import React from 'react';
import { Route } from 'react-router-dom';
import { Detail, Home, Login, Register, Search } from '../pages';
import { DefaultLayout } from '../layout';

const RouteDefaultLayOut = () => {
   return (
      <>
         <Route path="/" element={<DefaultLayout />}>
            <Route index element={<Home />} />
            <Route path="search" element={<Search />} />
            <Route path="detail" element={<Detail />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
         </Route>
      </>
   );
};

export default RouteDefaultLayOut;
