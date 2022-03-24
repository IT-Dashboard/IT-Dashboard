import React, { useState } from "react";
import Layout from "../components/Layout";
import Dashboard from "../components/Dashboard";
import Head from "next/head";

export default function Page() {
  return <Dashboard />;
}

Page.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
