import { useState } from "react";
import HeaderBrand from "@/components/Admin/Header/HeaderBrand";
import SidebarMenuButton from "@/components/Admin/Header/SidebarMenuButton";
import VisitSiteLink from "@/components/Admin/Header/VisitSiteLink";
import HeaderSearchbar from "@/components/Admin/Header/HeaderSearchbar";
import DarkTheme from "@/components/Admin/Header/DarkTheme";
import TopbarMenuToggleButton from "@/components/Admin/Header/TopbarMenuToggleButton";
import HeaderMainMenu from "@/components/Admin/Header/HeaderMainMenu";

export default function Home() {
  const [mobileMenuOpenIs, setMobileMenuOpenIs] = useState<boolean>(false);

  const mobileMenuClose = () => setMobileMenuOpenIs(false);
  const toggleMobileMenuOpen = () =>
    setMobileMenuOpenIs((prevState) => !prevState);

  return (
    <>
      <div className="dark:bg-slate-800 dark:highlight-white/5 dark:text-slate-400 min-h-screen">
        <header className="p-4 text-base border-b border-slate-900/10 dark:border-slate-300/10 sticky top-0 z-40 w-full flex-none bg-white/95 dark:bg-slate-800 backdrop-blur">
          {/* navbar */}
          <nav className="flex justify-between mx-1">
            <HeaderBrand />
            {/* menu wrapper for mobile menu */}
            <div className="flex justify-between lg:w-[calc(100%-15rem)]">
              <ul className="flex">
                <li>
                  {/* x-on:click="$store.sidebar.toggle()" */}
                  <SidebarMenuButton />
                </li>
                <li>
                  <VisitSiteLink />
                </li>
                <li>
                  <HeaderSearchbar />
                </li>
                <li>
                  <DarkTheme />
                </li>
                {/* mobile menu toggle button */}
                <li className="lg:hidden">
                  <TopbarMenuToggleButton onClick={toggleMobileMenuOpen} />
                </li>
              </ul>

              <HeaderMainMenu
                mobileMenuOpenIs={mobileMenuOpenIs}
                onClick={mobileMenuClose}
              />
            </div>
          </nav>
        </header>
      </div>
    </>
  );
}
