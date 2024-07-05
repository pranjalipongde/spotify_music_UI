import React from "react";
import Profile from "../assets/Profile.png";
import Logo from "../assets/Logo.png";

const Sidebar = () => {
  return (
    <div className="bg-gray-800 h-screen w-1/6 flex flex-col justify-between p-4">
      <div>
        <img src={Logo} alt="Logo" className="h-10 w-auto mb-6" />
      </div>

      <div className="flex itmes-center">
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
