import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import Head from "next/head";

export default function Layout({ title, children }) {
  const [showsidebar, setShowsidebar] = useState(true);
  return (
    <div className="min-h-screen">
      <Head>
        <title>{title} | IT Dashboard</title>
      </Head>
      {showsidebar && <Sidebar setShowsidebar={setShowsidebar} />}
      <div>
        <Topbar showsidebar={showsidebar} setShowsidebar={setShowsidebar} />
      </div>
      <div className={showsidebar ? " ml-0 lg:ml-60" : "ml-0"}>{children}</div>
    </div>
  );
}
