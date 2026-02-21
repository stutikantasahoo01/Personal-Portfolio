import React from "react";
import Footer from "./Footer";
import { Plane } from "lucide-react";
const Home = () => {
  return (
    <div className="w-full min-h-full flex flex-col justify-center items-center ">
      <div className="flex flex-col justify-between sm:justify-around w-full h-full gap-15  sm:w-[85%] md:max-w-[70%] p-5">
        <div className=" flex flex-col sm:justify-between ">
          <h3 className="text-[clamp(0.8rem,1.3rem,1.5vw)]">Hey, I'm</h3>
          <h1 className=" name text-[clamp(1rem,3vw,7vw)] mt-3 mb-3 sm:mt-5 sm:mb-5 w-fit  hyphens-auto leading-tight">
            Stutikanta Sahoo.
          </h1>

          <h3 className="text-[clamp(0.8rem,1.3rem,1.5vw)]">
            A Frontend Developer.
          </h3>
        </div>
        <div className="w-full md:w-[90%]">
          <p className="w-full tracking-wide leading-relaxed text-[clamp(0.8rem,1.2rem,1.5vw)]">
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
