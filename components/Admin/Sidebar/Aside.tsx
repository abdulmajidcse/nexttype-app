import {
  faBarsStaggered,
  faCube,
  faGrip,
  faPenToSquare,
  faTableList,
  faToggleOff,
  faTriangleExclamation,
  faFileLines,
} from "@fortawesome/free-solid-svg-icons";
import { faCircleDot } from "@fortawesome/free-regular-svg-icons";
import SidebarLink from "./SidebarLink";
import SidebarHeading from "./SidebarHeading";
import { useRouter } from "next/router";

export default function Aside() {
  const router = useRouter();

  return (
    <>
      <aside className="lg:text-sm lg:leading-6 relative mt-8 ta-sidebar">
        <ul className="text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300 text-base">
          <SidebarLink
            name="Dashboard"
            icon={faGrip}
            href="/auth"
            active={router.route === "/auth"}
          />
          <SidebarLink
            name="Page"
            icon={faFileLines}
            dropdownIs={true}
            active={false}
          >
            <>
              <SidebarLink name="Blank" topLinkIs={false} active={false} />
              <SidebarLink
                name="Auth"
                topLinkIs={false}
                dropdownIs={true}
                active={false}
              >
                <>
                  <SidebarLink
                    name="Register"
                    icon={faCircleDot}
                    topLinkIs={false}
                    active={false}
                  />
                  <SidebarLink
                    name="Login"
                    icon={faCircleDot}
                    topLinkIs={false}
                    active={false}
                  />
                </>
              </SidebarLink>
              <SidebarLink name="404 Error" topLinkIs={false} active={false} />
              <SidebarLink name="500 Error" topLinkIs={false} active={false} />
            </>
          </SidebarLink>
          <SidebarLink
            name="Forms"
            icon={faPenToSquare}
            rightLabel={
              <span className="bg-red-600 dark:bg-red-800 text-white/80 dark:text-white/50 text-sm font-semibold px-2 py-0.5 rounded absolute right-2">
                New
              </span>
            }
            active={false}
          />
          <SidebarLink name="Tables" icon={faTableList} active={false} />
          <SidebarHeading title="Components" />
          <SidebarLink
            name="Alerts"
            icon={faTriangleExclamation}
            active={false}
          />
          <SidebarLink name="Buttons" icon={faToggleOff} active={false} />
          <SidebarLink name="Cards" icon={faBarsStaggered} active={false} />
          <SidebarLink name="Modals" icon={faCube} active={false} />
        </ul>
      </aside>
    </>
  );
}
