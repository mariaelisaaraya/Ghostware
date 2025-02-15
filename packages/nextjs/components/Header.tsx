/* eslint-disable prettier/prettier */

/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useCallback, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { FaucetButton, RainbowKitCustomConnectButton } from "~~/components/scaffold-eth";
import { useOutsideClick } from "~~/hooks/scaffold-eth";

/* eslint-disable prettier/prettier */

/* eslint-disable @next/next/no-img-element */

/* eslint-disable prettier/prettier */

/* eslint-disable @next/next/no-img-element */

/* eslint-disable prettier/prettier */

/* eslint-disable @next/next/no-img-element */

/* eslint-disable prettier/prettier */

/* eslint-disable @next/next/no-img-element */

/* eslint-disable prettier/prettier */

/* eslint-disable @next/next/no-img-element */

/* eslint-disable prettier/prettier */
/* eslint-disable @next/next/no-img-element */

type HeaderMenuLink = {
  label: string;
  href: string;
  icon?: React.ReactNode;
};

export const menuLinks: HeaderMenuLink[] = [
  {
    label: "Advantages",
    href: "/#advantages",
  },
  {
    label: "Methodology",
    href: "/#methodology",
  },
];

export const HeaderMenuLinks = () => {
  const pathname = usePathname();

  return (
    <>
      {menuLinks.map(({ label, href, icon }) => {
        const isActive = pathname === href;
        return (
          <li key={href}>
            <Link href={href} passHref className={`px-8 ${isActive ? "!text-active" : "text-neutral"} `}>
              {icon}
              <span>{label}</span>
            </Link>
          </li>
        );
      })}
    </>
  );
};

/**
 * Site header
 */
export const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const burgerMenuRef = useRef<HTMLDivElement>(null);
  useOutsideClick(
    burgerMenuRef,
    useCallback(() => setIsDrawerOpen(false), []),
  );
  return (
    <header>
      <div className="sticky lg:static top-0 bg-white min-h-0 -0 z-20  px-0 sm:px-2">
        <div className="navbar max-w-screen-2xl mx-auto flex-shrink justify-between ">
          <div className="navbar-start w-auto">
            <div className="lg:hidden dropdown" ref={burgerMenuRef}>
              <label
                tabIndex={0}
                className={`ml-1 btn btn-ghost ${isDrawerOpen ? "hover:bg-secondary" : "hover:bg-transparent"}`}
                onClick={() => {
                  setIsDrawerOpen(prevIsOpenState => !prevIsOpenState);
                }}
              >
                <Bars3Icon className="h-1/2" />
              </label>
              {isDrawerOpen && (
                <ul
                  tabIndex={0}
                  className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 h-100"
                  onClick={() => {
                    setIsDrawerOpen(false);
                  }}
                >
                  <HeaderMenuLinks />
                </ul>
              )}
            </div>
            <Link href="/" className=" flex items-center gap-2 ml-4 mr-6 shrink-0">
              <div className="flex  items-center relative  h-10">
                <img alt="SE2 logo" className="cursor-pointer mr-2" src="/logo.svg" />
                <span className="hidden md:block logo text-darkGreen">GhostWare</span>
              </div>
            </Link>
          </div>
          <div className="flex justify-end">
            {" "}
            <ul className="hidden lg:flex lg:flex-nowrap menu menu-horizontal text-base px-1 gap-2">
              <HeaderMenuLinks />
            </ul>
            <div className="flex items-center">
              <RainbowKitCustomConnectButton />
              <FaucetButton />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
