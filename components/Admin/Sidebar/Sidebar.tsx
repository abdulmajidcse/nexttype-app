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

export default function Sidebar({
  show,
  onClose,
}: {
  show: boolean;
  onClose: () => void;
}) {
  return (
    <>
      {/* mobile menu display blur wrapper in sidebar */}
      <div
        className={`min-h-screen w-full fixed top-0 left-0 z-20 lg:hidden bg-black/20 backdrop-blur-sm dark:bg-slate-900/80 ${
          !show && "hidden"
        }`}
        onClick={onClose}
      />
      <div
        className={`fixed z-20 inset-0 top-[3.8125rem] right-auto w-[17rem] pb-10 px-4 overflow-y-auto bg-white dark:bg-inherit border-r border-slate-900/10 dark:border-slate-300/10 shadow-2xl transition-all duration-300 awesome-scrollbar ${
          show ? "lg:left-0" : "-left-[20rem]"
        }`}
      >
        <aside className="lg:text-sm lg:leading-6 relative mt-8 ta-sidebar">
          <ul className="text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300 text-base">
            <SidebarLink name="Dashboard" icon={faGrip} href="auth" />
            <SidebarLink name="Page" icon={faFileLines} dropdownIs={true}>
              <>
                <SidebarLink name="Blank" topLinkIs={false} />
                <SidebarLink name="Auth" topLinkIs={false} dropdownIs={true}>
                  <>
                    <SidebarLink
                      name="Register"
                      icon={faCircleDot}
                      topLinkIs={false}
                    />
                    <SidebarLink
                      name="Login"
                      icon={faCircleDot}
                      topLinkIs={false}
                    />
                  </>
                </SidebarLink>
                <SidebarLink name="404 Error" topLinkIs={false} />
                <SidebarLink name="500 Error" topLinkIs={false} />
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
            />
            <SidebarLink name="Tables" icon={faTableList} />
            <SidebarHeading title="Components" />
            <SidebarLink name="Alerts" icon={faTriangleExclamation} />
            <SidebarLink name="Buttons" icon={faToggleOff} />
            <SidebarLink name="Cards" icon={faBarsStaggered} />
            <SidebarLink name="Modals" icon={faCube} />
          </ul>
        </aside>
      </div>
    </>
  );
}
