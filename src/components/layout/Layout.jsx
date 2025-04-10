import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import "../../styles/layout.css"; // เพิ่มการนำเข้า CSS

const Layout = () => {
  return (
    <div className="layout">
      <Header />
      <div className="layout-main">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
