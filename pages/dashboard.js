import Dashboard from "../components/Dashboard";
import Topbar from "../components/Topbar";
import React, { useState } from "react";
// import Sidebar from "../components/Sidebar";

import Head from "next/head";

export default function Page() {
  const [showsidebar, setShowsidebar] = useState(true);
  return (
    <div className="container min-h-screen">
      <Head>
        <title>Main Dashboard | IT Dashboard</title>
      </Head>
      {/* {showsidebar && <Sidebar setShowsidebar={setShowsidebar} />} */}
      <div>
        <Topbar showsidebar={showsidebar} setShowsidebar={setShowsidebar} />
      </div>
      <div className={showsidebar ? " ml-0 lg:ml-60" : "ml-0"}>
        <Dashboard />
      </div>
    </div>
  );
}
