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
      <Menu as="div" className="relative flex w-full text-left">
        <Menu.Button as="div" className="rounded-md outline-none ">
          <AiOutlineMenu className="text-xl cursor-pointer hover:bg-ComponentsBackground-200" />
        </Menu.Button>

        <Menu.Items
          as="div"
          className={clsx(
            "relative z-50 w-full mt-48 focus:outline-none rounded"
          )}
        >
          {props.items.map((item) => (
            <Menu.Item
              as="a"
              href={item.href}
              className="block p-2 w-28 first-line:h-10 bg-ComponentsBackground-100 hover:bg-ComponentsBackground-200"
            >
              <div className="flex flex-row items-center">
                <div className="mr-2">{item.icon}</div>
                <div>{item.name}</div>
              </div>
            </Menu.Item>
          ))}
        </Menu.Items>
      </Menu>
    </div>
  );
};
