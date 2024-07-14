import React from "react";
import { Link, Outlet } from "react-router-dom";

const Menubar = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/darkeye">darkeye</Link>
        </li>
        <li>
          <Link to="/tadak">tadak</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default Menubar;
