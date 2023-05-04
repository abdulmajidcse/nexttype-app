import { useEffect, useState } from "react";
import type { ReactElement } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import type { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { faCircle } from "@fortawesome/free-regular-svg-icons";
import Link from "next/link";

interface SidebarLinkProps {
  name: string;
  active: boolean;
  href?: string;
  icon?: IconDefinition;
  topLinkIs?: boolean;
  dropdownIs?: boolean;
  rightLabel?: ReactElement;
  children?: ReactElement;
}

export default function SidebarLink({
  name,
  active,
  href,
  icon = faCircle,
  topLinkIs = true,
  dropdownIs = false,
  rightLabel,
  children,
}: SidebarLinkProps) {
  const [openIs, setOpenIs] = useState<boolean>(false);
  const linkChild = (
    <>
      <div className="mr-2 shadow-sm dark:highlight-white/10">
        <FontAwesomeIcon
          icon={icon ?? faCircle}
          className={`${topLinkIs && "text-lg"}`}
        />
      </div>
      {name}
      {dropdownIs ? (
        <FontAwesomeIcon
          icon={faAngleLeft}
          className='absolute right-2 ${openIs && "-rotate-90"}'
        />
      ) : (
        rightLabel
      )}
    </>
  );

  const linkClassNames = `${
    topLinkIs ? "top-link" : "sub-link"
  } flex items-center lg:leading-6 relative rounded p-2 hover:bg-gray-300 dark:hover:bg-slate-300/10 focus:outline-none focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-600 ${
    openIs && "active"
  }`;

  const toggleMenu = () => dropdownIs && setOpenIs((prevState) => !prevState);

  useEffect(() => {
    setOpenIs(active);
  }, [active]);

  return (
    <>
      <li className={`${topLinkIs && "mb-1"}`}>
        {href ? (
          <Link href={href} className={linkClassNames} onClick={toggleMenu}>
            {linkChild}
          </Link>
        ) : (
          <a href={"#"} className={linkClassNames} onClick={toggleMenu}>
            {linkChild}
          </a>
        )}
        {dropdownIs && (
          <>
            {/* dropdown menu */}
            <ul className={`my-1 ${openIs ? "block" : "hidden"}`}>
              {children}
            </ul>
          </>
        )}
      </li>
    </>
  );
}
