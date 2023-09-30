import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import TopNotification from "./TopNotification";
const Layout = () => {
  return (
    <div className="layout"  >
      <TopNotification/>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
