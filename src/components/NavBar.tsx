import React from "react";
import { IconsBar } from "./Icons";

export const NavBar = () => {
  const links = {
    home: {
      href: "/",
      text: "Home",
    },
    about: {
      href: "/",
      text: "About",
    },
    languages: {
      href: "/",
      text: "Skills",
    },
    projects: {
      href: "/",
      text: "Projects",
    },
  };
  return (
    <div className="w-[250px] h-full bg-zinc-900">
      <div className="pt-8 mx-6">
        <p className="text-xl font-bold tracking-wide">tom dev</p>
        <p className="text-sm">Aveiro, PT</p>
      </div>
      <div>
        <div className="mx-6 mt-8">
          {Object.entries(links).map(([key, value]) => {
            console.log(key, value);
            return (
              <div className="mb-2">
                <a
                  href={value.href}
                  className="text-sm text-gray-400 hover:text-white active:text-purple-400"
                >
                  {value.text}
                </a>
              </div>
            );
          })}
        </div>
      </div>
      <IconsBar />
    </div>
  );
};
