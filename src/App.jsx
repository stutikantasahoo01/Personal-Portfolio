import React, { useState } from "react";
import Navbar from "./component/Navbar";
import MainContent from "./component/MainContent";

const App = () => {
  const [ActiveTab, setActiveTab] = useState("Home");
  console.log(ActiveTab);

  return (
    <div className="h-full min-h-dvh bg-[#000000] leading-tight text-white tracking-wide flex flex-col justify-around sm:justify-normal">
      <Navbar setActiveTab={setActiveTab} ActiveTab={ActiveTab} />
      <MainContent ActiveTab={ActiveTab} />
    </div>
  );
};

export default App;
