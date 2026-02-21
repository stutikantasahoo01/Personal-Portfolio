import React, { useState } from "react";
import { EllipsisVertical, X } from "lucide-react";
import Logo from "./Logo";
import Navitems from "./Navitems";

const Navbar = ({ setActiveTab, ActiveTab }) => {
  const [isOpened, setisOpened] = useState(false);
  const navItems = ["Home", "Work", "Experience", "Contact"];
  return (
    <div className="flex flex-none justify-between items-center px-5 py-5 sm:px-10 sm:py-10 md:px-20 md:py-15 ">
      <Logo />
      <div className="hidden lg:block">
        <Navitems
          setActiveTab={setActiveTab}
          ActiveTab={ActiveTab}
          navItems={navItems}
        />
      </div>
      <button
        onClick={() => {
          setisOpened(!isOpened);
          console.log("Button Clicked");
        }}
        className="lg:hidden"
      >
        {isOpened ? (
          <X
            className="w-5 h-5 sm:w-8 sm:h-8 md:w-10 md:h-10"
            strokeWidth={2.25}
          />
        ) : (
          <EllipsisVertical
            className="w-5 h-5 sm:w-8 sm:h-8 md:w-10 md:h-10"
            strokeWidth={2.25}
          />
        )}
      </button>
      <div
        className={`fixed inset-0   transition-all duration-1000 ease-in-out transform flex flex-col items-center justify-center gap-15 z-50 lg:hidden backdrop-blur-sm ${
          isOpened ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <ul className="navlist  gap-6 flex flex-col items-center">
          {navItems.map((item) => (
            <li
              key={item}
              className={`cursor-pointer hover:scale-110 transition-transform$ ${ActiveTab === item ? "active-tab" : ""}`}
              onClick={() => {
                setisOpened(false);
                setActiveTab(item);
              }}
            >
              {item}
            </li>
          ))}
        </ul>
        <button
          onClick={() => {
            setisOpened(!isOpened);
            console.log("Button Clicked");
          }}
          className=""
        >
          {
            <X
              className="w-5 h-5 sm:w-8 sm:h-8 md:w-10 md:h-10"
              strokeWidth={2.25}
            />
          }
        </button>
      </div>
    </div>
  );
};

export default Navbar;
