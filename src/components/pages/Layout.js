import React from "react";
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
            <Link to="/"></Link>
            <Link to="/blogs"></Link>
            <Link to="/contact"></Link>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;