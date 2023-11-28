import React from 'react';
import { Outlet } from 'react-router-dom';
import { Footer, Navbar } from '../components';
import './DefaultLayout.scss';

function DefaultLayout() {
   return (
      <>
         <Navbar></Navbar>
         <Outlet></Outlet>
         <Footer></Footer>
      </>
   );
}

export default DefaultLayout;
