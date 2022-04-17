import React, { useState } from "react";
import Layout from "../components/Layout";
import Dashboard from "../components/Dashboard";
import { withSessionSsr } from "../lib/session";

export default function Page() {
  return <h1 className="text-2xl">Organization</h1>;
}

Page.getLayout = function getLayout(page) {
  return <Layout title="Work in Progress">{page}</Layout>;
};

export const getServerSideProps = withSessionSsr(
  async function getServerSideProps({ req }) {
    const user = req.session.user;

    if (!user) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        user: req.session.user,
      },
    };
  }
);
