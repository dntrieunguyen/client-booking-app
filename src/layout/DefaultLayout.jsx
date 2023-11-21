import React from 'react';
import { Outlet } from 'react-router-dom';
import './DefaultLayout.scss';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';

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
