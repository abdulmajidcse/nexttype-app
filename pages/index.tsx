import type { ReactElement } from "react";
import FrontendLayout from "@/components/Layouts/FrontendLayout";
import type { NextPageWithLayout } from "./_app";
import Link from "next/link";
import Head from "next/head";

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>{`Home - ${process.env.NEXT_PUBLIC_APP_NAME}`}</title>
      </Head>

      <h2 className="text-xl">
        Welcome to NextJS & TailwindCSS Admin Template
      </h2>
      <Link
        href="auth"
        className="text-blue-500 hover:underline hover:text-yellow-500"
      >
        Go to Dashboard
      </Link>
    </>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <FrontendLayout>{page}</FrontendLayout>;
};

export default Home;
