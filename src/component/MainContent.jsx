import React from "react";
import Home from "./Home";
import Experience from "./Experience";
import Works from "./Works";
import Contact from "./Contact";

const MainContent = ({ ActiveTab }) => {
  const renderContent = () => {
    switch (ActiveTab) {
      case "Home":
        return <Home />;
      case "Work":
        return <Works />;
      case "Experience":
        return <Experience />;
      case "Contact":
        return <Contact />;
      default:
        return <Home />;
    }
  };
  return (
    <div className="flex flex-1 justify-center items-center">{renderContent()}</div>
  );
};

export default MainContent;
