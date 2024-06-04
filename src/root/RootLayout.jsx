import { Outlet } from "react-router-dom";

import { useState } from "react";
import Topbar from "../Topbar";

const RootLayout = () => {
  return (
    <div className="container">
      <Topbar />
      <Outlet />
    </div>
  );
};

export default RootLayout;
