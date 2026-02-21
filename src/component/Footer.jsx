import React from "react";
import { Twitter, Facebook, Linkedin, Github, Copyright } from "lucide-react";
const Footer = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center w-full gap-2">
      <div className=" w-full lg:w-[20%] ">
        <ul className="w-full  flex justify-between  items-center social-link1 ">
          <li className="social-link-animate">
            {" "}
            <Twitter size={20} strokeWidth={1.5} />
          </li>
          <li className="social-link-animate">
            <Facebook size={20} strokeWidth={1.5} />
          </li>
          <li className="social-link-animate">
            <Linkedin size={20} strokeWidth={1.5} />
          </li>
          <li className="social-link-animate">
            <Github size={20} strokeWidth={1.5} />
          </li>
        </ul>
      </div>
      <div className="w-full hidden md:flex items-center justify-center mt-7 lg:mt-0 ">
        <div className="w-[40%] lg:w-[65%] ">
          <div className="bg-[#dfdfdf] w-full h-px line-1"></div>
        </div>

        <div className="flex px-2 items-center justify-center gap-0.5 whitespace-nowrap">
          <Copyright size={16} strokeWidth={1.25} />
          /2026
        </div>
        <div className="w-[40%] lg:w-[25%]">
          <div className="bg-[#dfdfdf] h-px line-2 w-full"></div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
