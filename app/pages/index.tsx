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
        </div>
      </div>
      <NavBar page="home" />
    </div>
  );
}
