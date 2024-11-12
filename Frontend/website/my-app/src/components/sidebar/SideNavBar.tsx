import React from "react";
import Navbar from "./Navbar";
import Profile from "./Profile";
const SideNavBar = () => {
  return (
    <div>
      <div className="flex flex-col ml-8">
        <Profile /> <Navbar />
      </div>
    </div>
  );
};

export default SideNavBar;
