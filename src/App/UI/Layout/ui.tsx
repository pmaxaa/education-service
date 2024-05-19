import React from "react";
import { Outlet } from "react-router-dom";
import { Footer } from "../Footer/ui";

export const Layout = () => {
  return (
    <div className="layout">
      <Outlet />
      <Footer />
    </div>
  );
};
