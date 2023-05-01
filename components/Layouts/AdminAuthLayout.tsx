import type { ReactElement } from "react";
import { useEffect, useState } from "react";
import HeaderBrand from "@/components/Admin/Header/HeaderBrand";
import SidebarMenuButton from "@/components/Admin/Header/SidebarMenuButton";
import VisitSiteLink from "@/components/Admin/Header/VisitSiteLink";
import HeaderSearchbar from "@/components/Admin/Header/HeaderSearchbar";
import DarkTheme from "@/components/Admin/Header/DarkTheme";
import TopbarMenuToggleButton from "@/components/Admin/Header/TopbarMenuToggleButton";
import HeaderMainMenu from "@/components/Admin/Header/HeaderMainMenu";
import Footer from "../Admin/Footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBarsStaggered,
  faCube,
  faGrip,
  faPenToSquare,
  faTableList,
  faToggleOff,
  faTriangleExclamation,
} from "@fortawesome/free-solid-svg-icons";

export default function AdminAuthLayout({
  children,
}: {
  children: ReactElement;
}) {
  const [mobileMenuOpenIs, setMobileMenuOpenIs] = useState<boolean>(false);
  const [sidebarMenuOpenIs, setSidebarMenuOpenIs] = useState<boolean>(true);

  const mobileMenuClose = () => setMobileMenuOpenIs(false);
  const toggleMobileMenuOpen = () =>
    setMobileMenuOpenIs((prevState) => !prevState);

  const sidebarMenuClose = () => setSidebarMenuOpenIs(false);
  const toggleSidebarMenu = () =>
    setSidebarMenuOpenIs((prevState) => !prevState);

  // change sidebarMenuOpenIs value when screen width will change
  const matchMediaForSidebar = (e: MediaQueryListEvent | MediaQueryList) => {
    if (e.matches) {
      // in lg screen
      setSidebarMenuOpenIs(true);
    } else {
      // in less than lg screen
      setSidebarMenuOpenIs(false);
    }
  };

  useEffect(() => {
    const windowWidthLg = window.matchMedia("(min-width: 1024px)");
    windowWidthLg.addEventListener("change", matchMediaForSidebar);
    matchMediaForSidebar(windowWidthLg);
  }, []);

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
                  <SidebarMenuButton onClick={toggleSidebarMenu} />
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

        <div className="max-w-8xl mx-auto px-4 sm:px-6 md:px-8 bg-slate-50 dark:bg-inherit">
          {/* mobile menu display blur wrapper in sidebar */}
          <div
            className={`min-h-screen w-full fixed top-0 left-0 z-20 lg:hidden bg-black/20 backdrop-blur-sm dark:bg-slate-900/80 ${
              !sidebarMenuOpenIs && "hidden"
            }`}
            onClick={sidebarMenuClose}
          />
          <div
            className={`fixed z-20 inset-0 top-[3.8125rem] right-auto w-[17rem] pb-10 px-4 overflow-y-auto bg-white dark:bg-inherit border-r border-slate-900/10 dark:border-slate-300/10 shadow-2xl transition-all duration-300 scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-slate-400 ${
              sidebarMenuOpenIs ? "lg:left-0" : "-left-[20rem]"
            }`}
          >
            <aside className="lg:text-sm lg:leading-6 relative mt-8 ta-sidebar">
              <ul className="text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300 text-base">
                <li className="mb-1">
                  <a
                    href="#"
                    className="top-link active flex items-center lg:leading-6 text-base rounded p-2 focus:outline-none focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-600"
                  >
                    <div className="mr-2 shadow-sm dark:highlight-white/10">
                      <FontAwesomeIcon icon={faGrip} className="text-lg" />
                    </div>
                    Dashboard
                  </a>
                </li>
                {/* <li x-data="{ open: false }" className="mb-1">
          <a href="#" className="sub-link flex items-center lg:leading-6 relative rounded p-2 hover:bg-gray-300 dark:hover:bg-slate-300/10 focus:outline-none focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-600" :class="{ 'active' : open }" x-on:click="open = !open">
            <div className="mr-2 shadow-sm dark:highlight-white/10">
              <i className="fa-solid fa-file-lines text-lg" />
            </div>
            Pages
            <i className="fas fa-angle-left absolute right-2" :class="{ '-rotate-90' : open }" />
          </a>
          dropdown menu
          <ul className="my-1" x-show="open">
            <li>
              <a href="#" className="sub-link block mb-1 rounded p-2 hover:bg-gray-300 dark:hover:bg-slate-300/10 focus:outline-none focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-600">
                <i className="far fa-circle mr-2" /> Blank
              </a>
            </li>
            <li x-data="{ open: false }">
              <a href="#" className="sub-link block rounded p-2 hover:bg-gray-300 dark:hover:bg-slate-300/10 focus:outline-none focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-600 relative" x-on:click="open = !open" :class="{ 'active' : open }">
                <i className="far fa-circle mr-2" /> Auth
                <i className="fas fa-angle-left absolute right-2 mt-1" :class="{ '-rotate-90' : open }" />
              </a>
              sub dropdown menu
              <ul className="my-1" x-show="open">
                <li>
                  <a href="./pages/auth/register.html" className="sub-link block mb-1 rounded p-2 hover:bg-gray-300 dark:hover:bg-slate-300/10 focus:outline-none focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-600">
                    <i className="far fa-dot-circle mr-2" /> Register
                  </a>
                </li>
                <li>
                  <a href="./pages/auth/login.html" className="sub-link block rounded p-2 hover:bg-gray-300 dark:hover:bg-slate-300/10 focus:outline-none focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-600">
                    <i className="far fa-dot-circle mr-2" /> Log In
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#" className="sub-link block rounded p-2 hover:bg-gray-300 dark:hover:bg-slate-300/10 focus:outline-none focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-600">
                <i className="far fa-circle mr-2" /> 404 Error
              </a>
            </li>
            <li>
              <a href="#" className="sub-link block rounded p-2 hover:bg-gray-300 dark:hover:bg-slate-300/10 focus:outline-none focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-600">
                <i className="far fa-circle mr-2" /> 500 Error
              </a>
            </li>
          </ul>
        </li> */}
                <li className="mb-1">
                  <a
                    href="#"
                    className="top-link flex items-center lg:leading-6 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300 text-base rounded p-2 hover:bg-gray-300 dark:hover:bg-slate-300/10 focus:outline-none focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-600 relative"
                  >
                    <div className="mr-2 shadow-sm dark:highlight-white/10">
                      <FontAwesomeIcon
                        icon={faPenToSquare}
                        className="text-lg"
                      />
                    </div>
                    Forms
                    <span className="bg-red-600 dark:bg-red-800 text-white/80 dark:text-white/50 text-sm font-semibold px-2 py-0.5 rounded absolute right-2">
                      New
                    </span>
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    href="#"
                    className="top-link flex items-center lg:leading-6 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300 text-base rounded p-2 hover:bg-gray-300 dark:hover:bg-slate-300/10 focus:outline-none focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-600 relative"
                  >
                    <div className="mr-2 shadow-sm dark:highlight-white/10">
                      <FontAwesomeIcon icon={faTableList} className="text-lg" />
                    </div>
                    Tables
                  </a>
                </li>
                <li className="mb-1">
                  <span className="block my-1 text-sm p-2 pl-0 font-semibold uppercase">
                    Components
                  </span>
                </li>
                <li className="mb-1">
                  <a
                    href="#"
                    className="top-link flex items-center lg:leading-6 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300 text-base rounded p-2 hover:bg-gray-300 dark:hover:bg-slate-300/10 focus:outline-none focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-600 relative"
                  >
                    <div className="mr-2 shadow-sm dark:highlight-white/10">
                      <FontAwesomeIcon
                        icon={faTriangleExclamation}
                        className="text-lg"
                      />
                    </div>
                    Alerts
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    href="#"
                    className="top-link flex items-center lg:leading-6 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300 text-base rounded p-2 hover:bg-gray-300 dark:hover:bg-slate-300/10 focus:outline-none focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-600 relative"
                  >
                    <div className="mr-2 shadow-sm dark:highlight-white/10">
                      <FontAwesomeIcon icon={faToggleOff} className="text-lg" />
                    </div>
                    Buttons
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    href="#"
                    className="top-link flex items-center lg:leading-6 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300 text-base rounded p-2 hover:bg-gray-300 dark:hover:bg-slate-300/10 focus:outline-none focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-600 relative"
                  >
                    <div className="mr-2 shadow-sm dark:highlight-white/10">
                      <FontAwesomeIcon
                        icon={faBarsStaggered}
                        className="text-lg"
                      />
                    </div>
                    Cards
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    href="#"
                    className="top-link flex items-center lg:leading-6 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300 text-base rounded p-2 hover:bg-gray-300 dark:hover:bg-slate-300/10 focus:outline-none focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-600 relative"
                  >
                    <div className="mr-2 shadow-sm dark:highlight-white/10">
                      <FontAwesomeIcon icon={faCube} className="text-lg" />
                    </div>
                    Modals
                  </a>
                </li>
              </ul>
            </aside>
          </div>
          <div
            className={`transition-all duration-300 ${
              sidebarMenuOpenIs && "lg:pl-[17rem]"
            }`}
          >
            <main className="pt-5 min-h-[calc(100vh-13rem)]">{children}</main>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}
