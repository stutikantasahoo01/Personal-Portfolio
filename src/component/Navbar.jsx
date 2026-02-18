import React from "react";
import Logo from "./Logo";
import Navitems from "./Navitems";

const Navbar = ({ setActiveTab, ActiveTab }) => {
  return (
    <div className="flex flex-none justify-between items-center px-5 py-10 sm:px-25 sm:py-20 mb-5 ">
      <Logo />
      <Navitems setActiveTab={setActiveTab} ActiveTab={ActiveTab} />
    </div>
  );
};

export default Navbar;
