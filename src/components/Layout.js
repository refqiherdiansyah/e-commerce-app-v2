import React from "react";
import { Outlet } from 'react-router-dom';
import Footer from './Footer';  // Pastikan ini sesuai dengan lokasi file Footer.js
import Header from './Header';  // Pastikan ini sesuai dengan lokasi file Header.js

const Layout = () => {
  return (
    <>
      <Header />  {/* Menampilkan Header */}
      <main>
      <Outlet />  {/* Menampilkan konten dari rute yang dipilih */}
      </main>
      <Footer />  {/* Menampilkan Footer */}
    </>
  );
};

export default Layout;

