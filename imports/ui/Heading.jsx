import React from "react";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { SiMeteor } from "react-icons/si";
import { TbApi } from "react-icons/tb";

export const Navbar = () => {
  return (
    <div>
      <div className="flex justify-between mb-2">
        <div className="font-semibold text-5xl pl-5 pt-4 pb-3">
          Stock Warehouse Demo with MeteorJS
        </div>
        <div className="pt-4 pr-4">
          <div className="flex gap-2.5">
            <FaLinkedin className="h-12 w-12" />
            <FaGithubSquare className="h-12 w-12" />
            <TbApi className="h-14 w-14" />
            <SiMeteor className="h-11 w-11 transform -scale-x-100" />
          </div>
        </div>
      </div>
      <div className="border-b-2 border-gray-400"></div>
    </div>
  );
};
