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
      {showsidebar && (
        <Sidebar
          user={children.props.children.props.user}
          setShowsidebar={setShowsidebar}
        />
      )}
      <div>
        <Topbar showsidebar={showsidebar} setShowsidebar={setShowsidebar} />
      </div>
      <div className={showsidebar ? "mt-20 ml-4 lg:ml-64" : "mt-20 ml-4"}>
        {children}
      </div>
    </div>
  );
}
