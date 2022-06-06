import React, { useState } from "react";

import { AiFillGithub } from "react-icons/ai";
import { HomeIcon, AboutIcon, TechIcon, ProjectIcons } from "./Icons";
import { Dropdown } from "./Dropdown";
import { IconsBar } from "./IconsBar";

interface Props {
  active: string;
}

export const NavBar: React.FC<Props> = ({ active }) => {
  const [activeTab, setActiveTab] = useState(active);

  const links = {
    home: {
      href: "/home",
      text: "Home",
    },
    about: {
      href: "/about",
      text: "About",
    },
    skills: {
      href: "/skills",
      text: "Skills",
    },
    projects: {
      href: "/projects",
      text: "Projects",
    },
  };
  return (
    <>
      <div className="md:hidden w-full h-[60px] bg-transparent flex flex-row border-b-[1px] border-ComponentsBackground-100">
        <div className="container flex flex-row items-center justify-between mx-6 ">
          <div>
            <p className="text-lg font-bold">Tom Dev</p>
          </div>
          <Dropdown
            className="absolute block h-6 w-44 top-2 right-4 lg:hidden"
            items={[
              {
                name: "home",
                href: "/home",
                icon: <HomeIcon className="text-xs bg-letterings-300" />,
              },
              {
                name: "about",
                href: "/about",
                icon: <AboutIcon className="text-xs bg-letterings-300" />,
              },
              {
                name: "skills",
                href: "/skills",
                icon: <TechIcon className="text-xs bg-letterings-300" />,
              },
              {
                name: "projects",
                href: "/projects",
                icon: <ProjectIcons className="text-xs bg-letterings-300" />,
              },
              {
                name: "github",
                href: "https://github.com/tomasaguiar",
                icon: <AiFillGithub className="text-xl" color="#d9d9d9" />,
              },
            ]}
          />
        </div>
      </div>
      <div className="md:w-[250px] md:h-full bg-zinc-900 md:flex md:flex-col hidden">
        <div className="pt-8 mx-6">
          <p className="text-xl font-bold tracking-wide">tom dev</p>
          <p className="text-sm">Aveiro, PT</p>
        </div>
        <div className="flex flex-col">
          <div className="mx-6 mt-8">
            {Object.entries(links).map(([key, value]) => {
              console.log(key, value);
              return (
                <div className="mb-2">
                  <a
                    href={value.href}
                    className="text-sm text-gray-400 hover:text-white active:text-purple-400"
                  >
                    {activeTab == value.text ? (
                      <span className="text-purple-400">{value.text}</span>
                    ) : (
                      <span>{value.text}</span>
                    )}
                  </a>
                </div>
              );
            })}
          </div>
        </div>
        <IconsBar />
      </div>
    </>
  );
};
