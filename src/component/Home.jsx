import React from "react";
import Footer from "./Footer";
import { Plane } from "lucide-react";
const Home = () => {
  return (
    <div className="w-full flex flex-col justify-between items-center">
      <div className="flex flex-col w-full h-full gap-15  sm:max-w-[70%] p-5 ">
        <div className=" flex flex-col justify-between">
          <h3>Hey, I'm</h3>
          <div className="name-container">
            <h1 className="name">Stutikanta Sahoo.</h1>
          </div>
          <h3>A Frontend Developer.</h3>
        </div>
        <div>
          <p className="tracking-wider leading-7">
            Motivated and detail-oriented aspiring developer dedicated to
            creating seamless, user-centric web experiences. As a fresher, I am
            committed to writing clean, efficient code and collaborating with
            professional teams to solve real-world problems. I am eager to
            leverage my foundational knowledge to build modern digital solutions
            and grow within a fast-paced development environment.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
