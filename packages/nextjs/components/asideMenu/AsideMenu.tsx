"use client";

import AsideMenuBtn from "./AsideMenuBtn";
import { BsAward, BsBook, BsJournals, BsSearch, BsStars } from "react-icons/bs";
import { UnlockEvent } from "~~/app/dashboard/logros/airdrop";

const AsideMenu = () => {
  return (
    <aside className="w-[100%] md:w-auto">
      <AsideMenuBtn value="Ruta de aprendizaje" icon={BsBook} fill="darkOrange" href="/dashboard" />
    </aside>
  );
};
export default AsideMenu;
