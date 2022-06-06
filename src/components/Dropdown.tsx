import React from "react";
import clsx from "clsx";
import { Menu } from "@headlessui/react";
import { AiOutlineMenu } from "react-icons/ai";

type Section = {
  name: string;
  href: string;
  icon?: React.ReactNode;
};

export interface DropdownProps {
  items: Section[];
  className?: string;
}

export const Dropdown: React.FC<DropdownProps> = (props) => {
  return (
    <div className="flex justify-center">
      <Menu as="div" className="relative flex w-full text-left rounded">
        <Menu.Button as="div" className="rounded-md outline-none ">
          <AiOutlineMenu className="text-xl cursor-pointer hover:bg-[#303544]" />
        </Menu.Button>

        <Menu.Items
          as="div"
          className={clsx(
            "relative z-50 w-full mt-48 focus:outline-none rounded shadow-lg ring-1 ring-black ring-opacity-5"
          )}
        >
          {props.items.map((item) => (
            <Menu.Item
              as="a"
              href={item.href}
              className="block p-2 w-44 first-line:h-10 bg-[#20222D] hover:bg-[#303544]"
            >
              <div className="flex flex-row items-center">
                <div className="mx-2 my-[2px]">{item.icon}</div>
                <div className="text-sm">{item.name}</div>
              </div>
            </Menu.Item>
          ))}
        </Menu.Items>
      </Menu>
    </div>
  );
};
