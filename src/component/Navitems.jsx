import React from "react";

const Navitems = ({ setActiveTab, ActiveTab }) => {
  return (
    <div>
      <ul className="navlist flex gap-9">
        <li
          className={ActiveTab === "Home" ? "active-tab" : ""}
          onClick={() => setActiveTab("Home")}
        >
          Home
        </li>
        <li
          className={ActiveTab === "Work" ? "active-tab" : ""}
          onClick={() => setActiveTab("Work")}
        >
          Work
        </li>
        <li
          className={ActiveTab === "Experience" ? "active-tab" : ""}
          onClick={() => setActiveTab("Experience")}
        >
          Experience
        </li>
        <li
          className={ActiveTab === "Contact" ? "active-tab" : ""}
          onClick={() => setActiveTab("Contact")}
        >
          Contact
        </li>
      </ul>
    </div>
  );
};

export default Navitems;
