import React from "react";
import Navbar from "./Navbar";
import Profile from "./Profile";
const SideNavBar = () => {
  return (
    <div className=" justify-self-center">
      <div className="flex flex-col ml-8 gap-6 ">
        <Profile /> <Navbar />
      </div>
    </div>
  );
};

export default SideNavBar;
