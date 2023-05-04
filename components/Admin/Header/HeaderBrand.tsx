import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLayerGroup } from "@fortawesome/free-solid-svg-icons";

export default function HeaderBrand() {
  return (
    <>
      {/* brand */}
      <Link href="/auth" className="flex items-center">
        {/* an example to use logo */}
        {/* <img src="https://flowbite.com/docs/images/logo.svg" class="mr-2 h-7" alt="Logo" title="Logo" /> */}
        <FontAwesomeIcon
          icon={faLayerGroup}
          className="text-2xl mr-2 text-blue-800"
        />
        <span className="self-center text-lg font-semibold whitespace-nowrap dark:text-white hidden sm:inline-block">
          Tailwind Admin
        </span>
      </Link>
    </>
  );
}
