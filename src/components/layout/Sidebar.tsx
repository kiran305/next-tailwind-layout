// components/layout/Sidebar.tsx
import React, { useRef } from "react";
import classNames from "classnames";
import { useOnClickOutside } from "usehooks-ts";
import { navItems } from "./navItems";
import Link from "next/link";
import Image from "next/image";
import { UserCircleIcon } from "@heroicons/react/24/outline";
type Props = {
  open: boolean;
  setOpen(open: boolean): void;
};
const Sidebar = ({ open, setOpen }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  useOnClickOutside(ref, (e) => {
    //console.log('--e.target---', e.target)
    setOpen(false);
  });
  return (
    <>
      <div
        className={classNames({
          "flex  flex-col bg-white border-r": true, // layout
          "md:w-full md:sticky md:z-0 top-0 z-20 fixed": true, // positioning
          "transition-transform .3s ease-in-out md:-translate-x-0": true, //animations
          "-translate-x-full ": !open, //hide sidebar to the left when closed
        })}
        ref={ref}
      >
        <div
          className={classNames({
            "flex justify-center items-center": true, // layout
            "h-[64px]": true
          })}
        >
          <Image
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
            src="/next.svg"
            alt="Next.js Logo"
            width={120}
            height={60}
            priority
          />
        </div>
        <div
          className={classNames({
            "flex flex-col justify-between": true, // layout
            "h-[calc(100vh_-_64px)]  w-[300px]": true, // for height and width

          })}
          ref={ref}
        >
          <nav className="md:sticky top-0 md:top-16">
            {/* nav items */}
            <ul className="py-2 flex flex-col gap-2">
              {navItems.map((item, index) => {
                return (
                  <Link key={index} href={item.href}>
                    <li
                      className={classNames({
                        "text-black hover:bg-slate-700 hover:text-white": true, //colors
                        "flex gap-4 items-center ": true, //layout
                        "transition-colors duration-200": true, //animation
                        "p-2": true, //self style
                      })}
                    >
                      {item.icon} {item.label}
                    </li>
                  </Link>
                );
              })}
            </ul>
          </nav>
          <div className="border-t border-t-black-600 p-4">
            <div className="flex gap-4 items-center">
              <UserCircleIcon className="h-10 w-10" />
              <div className="flex flex-col ">
                <span className="text-black my-0">Tom Cook</span>
                <Link href="/" className="text-blue-500 text-sm">
                  View Profile
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>

  );
};
export default Sidebar;
