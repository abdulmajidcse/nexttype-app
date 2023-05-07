import Link from "next/link";
import { type ReactElement } from "react";
import DarkTheme from "../Admin/DarkTheme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLayerGroup } from "@fortawesome/free-solid-svg-icons";

export default function AdminGuestLayout({
  children,
}: {
  children: ReactElement;
}) {
  return (
    <>
      {/* Theme section */}
      <div className="fixed top-4 right-4 md:top-10 md:right-10 z-20">
        <DarkTheme />
      </div>

      {/* use py-5 when form will over h-screen */}
      <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 dark:bg-gray-900">
        <div>
          <Link href="/" className="flex items-center">
            <FontAwesomeIcon
              icon={faLayerGroup}
              className="text-4xl mr-2 text-blue-800"
              title={process.env.NEXT_PUBLIC_APP_NAME}
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              {process.env.NEXT_PUBLIC_APP_NAME}
            </span>
          </Link>
        </div>
        <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white dark:bg-gray-800 shadow-md overflow-hidden sm:rounded-lg">
          {children}
        </div>
      </div>
    </>
  );
}
