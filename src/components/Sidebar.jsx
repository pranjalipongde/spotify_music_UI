import React from "react";
import Profile from "../assets/Profile.png";
import Logo from "../assets/Logo.png";

const Sidebar = () => {
  return (
    <div className="lg:h-screen w-full md:w-60 flex flex-row lg:flex-col justify-between p-4">
      <div>
        <img src={Logo} alt="Logo" className="h-10 w-auto " />
      </div>

      <div className="flex itmes-center mt-auto">
        <img
          src={Profile}
          alt="Profile"
          className="w-10 h-10 rounded-full mr-2"
        />
      </div>
    </div>
  );
};

export default Sidebar;
