import React from "react";
import {
  Twitter,
  Facebook,
  Linkedin,
  Github,
  Copyright,
} from "lucide-react";
const Footer = () => {
  return (
    <div className="flex items-center justify-between w-full sm:max-w-[70%] mt-5  px-4">
      <div>
        <ul className="flex gap-6 justify-center items-center px-2 social-link">
          <li>
            {" "}
            <Twitter size={20} strokeWidth={1.5} />
          </li>
          <li>
            <Facebook size={20} strokeWidth={1.5} />
          </li>
          <li>
            <Linkedin size={20} strokeWidth={1.5} />
          </li>
          <li>
            <Github size={20} strokeWidth={1.5} />
          </li>
        </ul>
      </div>
      <div className="w-[50%]">
        <div className="bg-[#dfdfdf] w-full h-px line-1"></div>
      </div>

      <div className="flex px-4 py-3 items-center justify-center gap-0.5">
        <Copyright size={16} strokeWidth={1.25} />
        /2026
      </div>
      <div className="w-[20%]">
        <div className="bg-[#dfdfdf] h-px line-2"></div>
      </div>
    </div>
  );
};

export default Footer;
