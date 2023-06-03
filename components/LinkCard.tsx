import Link from "next/link";
import React from "react";
import { FiGithub } from "react-icons/fi";

const LinkCard = () => {
  return (
    <div
      className="flex flex-col w-full h-fit items-center p-8  rounded-t-3xl border-x-2 border-t-2
     border-black gap-5 hover:scale-105 transition-transform duration-200 shadow-soul-blue"
    >
      <Link href={"https://www.github.com/qianiaoo"} passHref>
        <div className="flex items-center gap-4 hover:border-b-2 border-black">
          <FiGithub size="2rem" />
          <span className="font-medium text-xl">@qianiaoo</span>
        </div>
      </Link>
    </div>
  );
};

export default LinkCard;
