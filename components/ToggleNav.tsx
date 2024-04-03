"use client";
import { close, menu } from "@/public/assets";
import { useState } from "react";
import Image from "next/image";
import { NavLink } from ".";

const TogglrNav = () => {
  const [toggle, setToggle] = useState<boolean>(true);

  return (
    <div className="sm:hidden flex flex-1 justify-end items-center">
      <Image
        src={toggle ? menu : close}
        alt={toggle ? "menu" : "close"}
        onClick={() => setToggle(!toggle)}
        width={28}
        height={28}
        className="cursor-pointer object-center"
      />
      <div
        onClick={() => setToggle(!toggle)}
        className={`${
          toggle ? "hidden" : "flex"
        } p-6 black-gradient sidebar absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
      >
        <NavLink />
      </div>
    </div>
  );
};

export default TogglrNav;
