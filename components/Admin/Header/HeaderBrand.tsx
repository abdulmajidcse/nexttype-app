import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLayerGroup } from "@fortawesome/free-solid-svg-icons";
// import Image from "next/image";

export default function HeaderBrand() {
  return (
    <>
      {/* brand */}
      <Link href="/auth" className="flex items-center">
        {/* an example to use logo */}
        {/* <Image
          className="mr-2 h-7"
          src="https://flowbite.com/docs/images/logo.svg"
          alt={process.env.NEXT_PUBLIC_APP_NAME ?? "NextJS"}
          title={process.env.NEXT_PUBLIC_APP_NAME ?? "NextJS"}
          width={28}
          height={28}
        /> */}
        <FontAwesomeIcon
          icon={faLayerGroup}
          className="text-2xl mr-2 text-blue-800"
        />
        <span className="self-center text-lg font-semibold whitespace-nowrap dark:text-white hidden sm:inline-block">
          {process.env.NEXT_PUBLIC_APP_NAME}
        </span>
      </Link>
    </>
  );
}
