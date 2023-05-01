import type { ReactElement } from "react";
import AdminAuthLayout from "@/components/Layouts/AdminAuthLayout";
import type { NextPageWithLayout } from "../_app";
import Head from "next/head";

const AuthDashboard: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Dashboard - NextJS App</title>
      </Head>
      <p>hello world</p>
    </>
  );
};

AuthDashboard.getLayout = function getLayout(page: ReactElement) {
  return <AdminAuthLayout>{page}</AdminAuthLayout>;
};

export default AuthDashboard;
