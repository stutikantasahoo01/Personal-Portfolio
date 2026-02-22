import React from "react";
import { Mail, User, Send } from "lucide-react";
const Contact = () => {
  return (
    <div className="w-full min-h-full flex flex-col items-center justify-center p-2">
      <div className="flex items-center justify-center gap-2 border-2 border-[#ffffff80] sm:p-2 mb-10 rounded">
        <Mail size={18} strokeWidth={1.5} />
        <h3>Stutikantasahoo01@gmail.com</h3>
      </div>
      <div>
        <h3>Don't hesitate to drop a message!</h3>
        <div className="flex items-center justify-center gap-2 border-2 border-[#ffffff80] rounded mt-5 pl-2">
          <User className="" size={18} strokeWidth={1.5} />
          <input
            className=" w-full h-full py-2 outline-0 border-0 required"
            type="text"
            placeholder="Name"
          />
        </div>
        <div className="flex items-center justify-center gap-2 border-2 border-[#ffffff80] rounded mt-10 pl-2">
          <Mail size={18} strokeWidth={1.5} />
          <input
            className="w-full h-full py-2 outline-0 border-0 required"
            type="text"
            placeholder="Email"
          />
        </div>
        <textarea
          className="w-full h-40 p-3 border-2 border-[#ffffff80] rounded mt-10"
          placeholder="Start typing"
        ></textarea>
      </div>
      <div className="flex  items-center justify-center border-2 border-[#ffffff80] rounded mt-7 px-2">
        <button className="w-full h-full py-2 px-1 outline-0 border-0">
          Send Message
        </button>
        <Send size={25} strokeWidth={1.5} />
      </div>
    </div>
  );
};

export default Contact;
