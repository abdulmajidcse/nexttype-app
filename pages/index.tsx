import { useEffect, useState } from "react";
import { Dropdown, Tooltip, Modal } from "flowbite-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faLayerGroup,
  faHome,
  faSearch,
  faMoon,
  faSun,
  faClose,
  faBell,
  faChevronDown,
  faCircleChevronDown,
  faUserCircle,
  faUser,
  faLock,
  faSignOut,
} from "@fortawesome/free-solid-svg-icons";
import setTheme from "@/utils/theme";
import Link from "next/link";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [domLoaded, setDomLoaded] = useState<boolean>(false);
  const [searchModalOpenIs, setSearchModalOpenIs] = useState<boolean>(false);

  const toggleMobileMenuOpen = () =>
    setMobileMenuOpen((prevState) => !prevState);

  const searchModalOpen = () => setSearchModalOpenIs(true);
  const searchModalClose = () => setSearchModalOpenIs(false);

  useEffect(() => {
    setDomLoaded(true);
    setTheme();
  }, []);

  return (
    <>
      <div className="dark:bg-slate-800 dark:highlight-white/5 dark:text-slate-400 min-h-screen">
        <header className="p-4 text-base border-b border-slate-900/10 dark:border-slate-300/10 sticky top-0 z-40 w-full flex-none bg-white/95 dark:bg-slate-800 backdrop-blur">
          {/* navbar */}
          <nav className="flex justify-between mx-1">
            {/* brand */}
            <Link href="/" className="flex items-center">
              {/* an example to use logo */}
              {/* <img src="https://flowbite.com/docs/images/logo.svg" class="mr-2 h-7" alt="Logo" title="Logo" /> */}
              <FontAwesomeIcon
                icon={faLayerGroup}
                className="text-2xl mr-2 text-blue-800"
                title="Logo"
              />
              <span className="self-center text-lg font-semibold whitespace-nowrap dark:text-white hidden sm:inline-block">
                Tailwind Admin
              </span>
            </Link>
            {/* menu wrapper for mobile menu */}
            <div className="flex justify-between lg:w-[calc(100%-15rem)]">
              <ul className="flex">
                <li>
                  <Tooltip content="Sidebar Menu">
                    <button
                      type="button"
                      className="inline-flex items-center p-2 text-base text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    >
                      {/* x-on:click="$store.sidebar.toggle()" */}
                      <span className="sr-only">Sidebar menu</span>
                      <FontAwesomeIcon icon={faBars} />
                    </button>
                  </Tooltip>
                </li>
                <li>
                  <Tooltip content="Visit site">
                    <Link
                      href="/"
                      className="inline-flex items-center p-2 text-base text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    >
                      <span className="sr-only">Visit site</span>
                      <FontAwesomeIcon icon={faHome} />
                    </Link>
                  </Tooltip>
                </li>
                <li>
                  <Tooltip content="Search here">
                    <button
                      type="button"
                      className="inline-flex items-center p-2 text-base text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                      onClick={searchModalOpen}
                    >
                      <span className="sr-only">Search</span>
                      <FontAwesomeIcon icon={faSearch} />
                    </button>
                  </Tooltip>
                </li>
                <li>
                  <Tooltip content="Switch to dark theme">
                    <button
                      id="dark_theme"
                      onClick={() => setTheme("dark")}
                      type="button"
                      className="inline-flex items-center p-2 text-base text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    >
                      <span className="sr-only">Dark theme</span>
                      <FontAwesomeIcon
                        icon={faMoon}
                        className="text-gray-500 dark:text-gray-400"
                      />
                    </button>
                  </Tooltip>
                  <Tooltip content="Switch to light theme">
                    <button
                      id="light_theme"
                      onClick={() => setTheme("light")}
                      type="button"
                      className="inline-flex items-center p-2 text-base text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    >
                      <span className="sr-only">Light theme</span>
                      <FontAwesomeIcon
                        icon={faSun}
                        className="text-gray-500 dark:text-gray-400"
                      />
                    </button>
                  </Tooltip>
                </li>
                {/* mobile menu toggle button */}
                <li className="lg:hidden">
                  <button
                    type="button"
                    className="inline-flex items-center p-2 text-base text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    onClick={toggleMobileMenuOpen}
                  >
                    <span className="sr-only">Topbar menu</span>
                    <FontAwesomeIcon icon={faCircleChevronDown} />
                  </button>
                </li>
              </ul>
              {/* mobile menu display blur wrapper */}
              <div
                className={`min-h-screen w-full fixed top-0 left-0 z-20 lg:hidden bg-black/20 backdrop-blur-sm dark:bg-slate-900/80 ${
                  !mobileMenuOpen && "hidden"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              />
              {/* main header menu */}
              <ul
                className={`lg:flex ${
                  mobileMenuOpen
                    ? "fixed lg:relative top-4 lg:top-0 right-4 lg:right-0 z-50 bg-white lg:bg-inherit p-6 lg:p-0 shadow-lg lg:shadow-none rounded-lg lg:rounded-none dark:bg-slate-800 dark:highlight-white/5 dark:text-slate-400"
                    : "hidden"
                }`}
              >
                <li>
                  <Dropdown
                    arrowIcon={false}
                    inline={true}
                    label={
                      domLoaded && (
                        <>
                          <button
                            className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                            type="button"
                          >
                            <FontAwesomeIcon
                              icon={faBell}
                              className="text-base"
                            />
                            <div className="flex relative">
                              <div className="inline-flex relative -top-2 right-2 w-3 h-3 bg-red-500 rounded-full border-2 border-white dark:border-gray-900" />
                            </div>
                            Notifications
                            <FontAwesomeIcon
                              icon={faChevronDown}
                              className="text-xs ml-1"
                            />
                          </button>
                        </>
                      )
                    }
                    className="max-w-md max-h-[calc(100vh-100%)] overflow-y-auto awesome-scrollbar"
                  >
                    <Dropdown.Header className="font-medium text-center text-gray-700 dark:text-white">
                      Notifications
                    </Dropdown.Header>
                    <Dropdown.Item>
                      <a
                        href="#"
                        className="flex py-3 px-4 hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        <div className="flex-shrink-0">
                          <img
                            className="w-11 h-11 rounded-full"
                            src="https://flowbite.com/docs/images/people/profile-picture-1.jpg"
                            alt="Jese image"
                          />
                          <div className="flex absolute justify-center items-center ml-6 -mt-5 w-5 h-5 bg-blue-600 rounded-full border border-white dark:border-gray-800">
                            <svg
                              className="w-3 h-3 text-white"
                              aria-hidden="true"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z" />
                              <path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z" />
                            </svg>
                          </div>
                        </div>
                        <div className="pl-3 w-full">
                          <div className="text-gray-500 text-sm mb-1.5 dark:text-gray-400">
                            New message from
                            <span className="font-semibold text-gray-900 dark:text-white">
                              Jese Leos
                            </span>
                            :{" "}
                            {`"Hey, what's up? All set for the
                                  presentation?"`}
                          </div>
                          <div className="text-xs text-blue-600 dark:text-blue-500">
                            a few moments ago
                          </div>
                        </div>
                      </a>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <a
                        href="#"
                        className="flex py-3 px-4 hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        <div className="flex-shrink-0">
                          <img
                            className="w-11 h-11 rounded-full"
                            src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                            alt="Joseph image"
                          />
                          <div className="flex absolute justify-center items-center ml-6 -mt-5 w-5 h-5 bg-gray-900 rounded-full border border-white dark:border-gray-800">
                            <svg
                              className="w-3 h-3 text-white"
                              aria-hidden="true"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z" />
                            </svg>
                          </div>
                        </div>
                        <div className="pl-3 w-full">
                          <div className="text-gray-500 text-sm mb-1.5 dark:text-gray-400">
                            <span className="font-semibold text-gray-900 dark:text-white">
                              Joseph Mcfall
                            </span>
                            and
                            <span className="font-medium text-gray-900 dark:text-white">
                              5 others
                            </span>
                            started following you.
                          </div>
                          <div className="text-xs text-blue-600 dark:text-blue-500">
                            10 minutes ago
                          </div>
                        </div>
                      </a>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <a
                        href="#"
                        className="flex py-3 px-4 hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        <div className="flex-shrink-0">
                          <img
                            className="w-11 h-11 rounded-full"
                            src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
                            alt="Bonnie image"
                          />
                          <div className="flex absolute justify-center items-center ml-6 -mt-5 w-5 h-5 bg-red-600 rounded-full border border-white dark:border-gray-800">
                            <svg
                              className="w-3 h-3 text-white"
                              aria-hidden="true"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                        </div>
                        <div className="pl-3 w-full">
                          <div className="text-gray-500 text-sm mb-1.5 dark:text-gray-400">
                            <span className="font-semibold text-gray-900 dark:text-white">
                              Bonnie Green
                            </span>
                            and
                            <span className="font-medium text-gray-900 dark:text-white">
                              141 others
                            </span>
                            love your story. See it and view more stories.
                          </div>
                          <div className="text-xs text-blue-600 dark:text-blue-500">
                            44 minutes ago
                          </div>
                        </div>
                      </a>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <a
                        href="#"
                        className="flex py-3 px-4 hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        <div className="flex-shrink-0">
                          <img
                            className="w-11 h-11 rounded-full"
                            src="https://flowbite.com/docs/images/people/profile-picture-4.jpg"
                            alt="Leslie image"
                          />
                          <div className="flex absolute justify-center items-center ml-6 -mt-5 w-5 h-5 bg-green-400 rounded-full border border-white dark:border-gray-800">
                            <svg
                              className="w-3 h-3 text-white"
                              aria-hidden="true"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                        </div>
                        <div className="pl-3 w-full">
                          <div className="text-gray-500 text-sm mb-1.5 dark:text-gray-400">
                            <span className="font-semibold text-gray-900 dark:text-white">
                              Leslie Livingston
                            </span>
                            mentioned you in a comment:
                            <span className="font-medium text-blue-500">
                              @bonnie.green
                            </span>
                            what do you say?
                          </div>
                          <div className="text-xs text-blue-600 dark:text-blue-500">
                            1 hour ago
                          </div>
                        </div>
                      </a>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <a
                        href="#"
                        className="flex py-3 px-4 hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        <div className="flex-shrink-0">
                          <img
                            className="w-11 h-11 rounded-full"
                            src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                            alt="Robert image"
                          />
                          <div className="flex absolute justify-center items-center ml-6 -mt-5 w-5 h-5 bg-purple-500 rounded-full border border-white dark:border-gray-800">
                            <svg
                              className="w-3 h-3 text-white"
                              aria-hidden="true"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                            </svg>
                          </div>
                        </div>
                        <div className="pl-3 w-full">
                          <div className="text-gray-500 text-sm mb-1.5 dark:text-gray-400">
                            <span className="font-semibold text-gray-900 dark:text-white">
                              Robert Brown
                            </span>
                            posted a new video: Glassmorphism - learn how to
                            implement the new design trend.
                          </div>
                          <div className="text-xs text-blue-600 dark:text-blue-500">
                            3 hours ago
                          </div>
                        </div>
                      </a>
                    </Dropdown.Item>
                    <Dropdown.Item className="justify-center">
                      <a
                        href="#"
                        className="py-2 text-sm font-medium text-center text-gray-900 bg-gray-50 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white"
                      >
                        <div className="inline-flex items-center">
                          <svg
                            className="mr-2 w-4 h-4 text-gray-500 dark:text-gray-400"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                            <path
                              fillRule="evenodd"
                              d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                          View all
                        </div>
                      </a>
                    </Dropdown.Item>
                  </Dropdown>
                </li>
                <li>
                  <Dropdown
                    arrowIcon={false}
                    inline={true}
                    label={
                      domLoaded && (
                        <button
                          className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                          type="button"
                        >
                          <span className="sr-only">Open user menu</span>
                          {/* <img class="mr-2 w-8 h-8 rounded-full" src="https://flowbite.com/docs/images/people profile-picture-3.jpg" alt="user photo" /> */}
                          <FontAwesomeIcon
                            icon={faUserCircle}
                            className="text-base mr-2"
                          />
                          Bonnie Green
                          <FontAwesomeIcon
                            icon={faChevronDown}
                            className="text-xs ml-1"
                          />
                        </button>
                      )
                    }
                  >
                    <Dropdown.Header>
                      <span className="block text-sm">Member</span>
                      <span className="block truncate text-sm font-medium">
                        name@example.com
                      </span>
                    </Dropdown.Header>
                    <Dropdown.Item>
                      <a
                        href="#"
                        className="block hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        <FontAwesomeIcon icon={faUser} />
                        <span className="ml-2">Profile</span>
                      </a>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <a
                        href="#"
                        className="block hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        <FontAwesomeIcon icon={faLock} />
                        <span className="ml-2">Change Password</span>
                      </a>
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item>
                      <a
                        href="#"
                        className="block text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                      >
                        <FontAwesomeIcon icon={faSignOut} />
                        <span className="ml-2">Log Out</span>
                      </a>
                    </Dropdown.Item>
                  </Dropdown>
                </li>
              </ul>
            </div>
          </nav>
        </header>

        {/* search modal */}
        <Modal
          dismissible={true}
          show={searchModalOpenIs}
          onClose={searchModalClose}
        >
          <Modal.Body className="bg-white rounded shadow dark:bg-gray-700">
            <button
              type="button"
              className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-600 rounded-lg text-sm py-1.5 px-2 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white z-10"
              onClick={searchModalClose}
            >
              <FontAwesomeIcon icon={faClose} className="text-lg" />
              <span className="sr-only">Close modal</span>
            </button>
            <div className="relative bg-dark-700 pt-8 px-8 pb-16">
              <div className="relative w-full overflow-hidden transition-all duration-500 focus-within:border-gray-600">
                <FontAwesomeIcon
                  icon={faSearch}
                  className="absolute bottom-2 left-1 text-gray-500"
                />
                <input
                  type="text"
                  className="flex-1 w-full pl-8 pr-4 py-1 tracking-wide text-gray-700 dark:text-white placeholder-gray-700 dark:placeholder-white/50 bg-transparent focus:outline-none border-0 border-b-2 border-gray-300 dark:border-gray-600 dark:focus:border-blue-500 focus:ring-0 focus:border-blue-600"
                  placeholder="Search here"
                />
              </div>
              {/* search modal open message */}
              <div className="mt-8 max-h-32 text-center text-gray-700 dark:text-white/50">
                <p>Enter a search term to find results.</p>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
}
