import Logo from "@/components/Logo";
import NavBar from "@/components/NavBar";
import SideBar from "@/components/SideBar";
import Head from "next/head";
import { useState } from "react";

export default function Home() {
  const [selectedFilter, setSelectedFilter] = useState<string>("Cafe");
  return (
    <div>
      <Head>
        <title>Home</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
        />
      </Head>
      <div className="w-screen h-screen overflow-hidden flex">
        <SideBar
          selectedFilter={selectedFilter}
          setSelectedFilter={setSelectedFilter}
        />
        <div className="w-full">
          <Logo />
          <div className="p-2">
            <input
              placeholder="Search"
              className="px-4 py-1 rounded-3xl w-full shadow-[0_0_10px_-3px_rgba(0,0,0,0.3)]"
            />
          </div>
          <div className="text-3xl p-4 font-bold text-primary">
            {selectedFilter}
          </div>
        </div>
      </div>
      <NavBar page="home" />
    </div>
  );
}
