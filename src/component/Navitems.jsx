import React from "react";

const Navitems = ({ setActiveTab, ActiveTab, navItems }) => {
  return (
    <div>
      <ul className="navlist flex flex-col gap-8 items-center lg:flex-row">
        {navItems.map((item, idx) => {
          return (
            <li
              key={idx}
              className={ActiveTab === item ? "active-tab" : ""}
              onClick={() => setActiveTab(item)}
            >
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Navitems;
