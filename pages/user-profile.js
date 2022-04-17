import React, { useState } from "react";
import Layout from "../components/Layout";
import Dashboard from "../components/Dashboard";
import { withSessionSsr } from "../lib/session";
import prisma from "../lib/prisma";

import { AiOutlineProfile } from "react-icons/ai";

export default function Page({ profile }) {
  return (
    <div>
      <h1 className="text-2xl flex items-center">
        <AiOutlineProfile className="w-5 h-5 mr-2" />
        User Profile
      </h1>
      <ul className="w-5/6 mt-5 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg ">
        <li className="w-full px-4 py-2 border-b border-gray-200 rounded-t-lg">
          {profile.firstName}
        </li>
        <li className="w-full px-4 py-2 border-b border-gray-200">
          {profile.lastName}
        </li>
        <li className="w-full px-4 py-2 border-b border-gray-200">
          {profile.address}
        </li>
        <li className="w-full px-4 py-2 border-b border-gray-200">
          {profile.phoneNumber}
        </li>
        <li className="w-full px-4 py-2 rounded-b-lg">{profile.email}</li>
      </ul>
    </div>
  );
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
        profile: await prisma.user.findUnique({
          where: {
            id: user.id,
          },
        }),
      },
    };
  }
);
