
import React from "react";
import Footer from "./Footer";
import { Plane } from "lucide-react";
const Home = () => {
  return (
    <div className="w-full min-h-full flex flex-col justify-center items-center ">
      <div className="flex flex-col justify-around w-full h-full gap-15  sm:w-[85%] md:max-w-[70%] p-5">
        <div className=" flex flex-col justify-between text-center sm:text-left">
          <h3 className="text-lg sm:text-xl lg:text-2xl">Hey, I'm</h3>
          <h1 className="name text-2xl sm:text-3xl md:text-4xl lg:text-5xl sm:w-fit mt-5 mb-5  hyphens-auto leading-tight">
            Stutikanta Sahoo.
          </h1>
          <h3 className="text-lg  sm:text-xl lg:text-2xl">
            A Frontend Developer.
          </h3>
        </div>
        <div className="p-2 ">
          <p className="w-full tracking-wider leading-7 text-center text-sm sm:text-balance sm:text-left">
            Motivated and detail-oriented aspiring developer dedicated to
            creating seamless, user-centric web experiences. As a fresher, I am
            committed to writing clean, efficient code and collaborating with
            professional teams to solve real-world problems. I am eager to
            leverage my foundational knowledge to build modern digital solutions
            and grow within a fast-paced development environment.
          </p>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
