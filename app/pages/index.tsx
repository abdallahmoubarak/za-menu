import BrandCard from "@/components/BrandCard";
import Logo from "@/components/Logo";
import NavBar from "@/components/NavBar";
import Search from "@/components/Search";
import SideBar from "@/components/SideBar";
import Head from "next/head";
import { useEffect, useState } from "react";

export default function Home() {
  const [selectedFilter, setSelectedFilter] = useState<string>("Cafe");
  const [search, setSearch] = useState<string>("");

  useEffect(() => {
    search.length > 0 ? setSelectedFilter("Search") : setSelectedFilter("All");
  }, [search]);
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
          <Search search={search} setSearch={setSearch} />
          <div className="text-3xl px-4 py-2 font-bold text-primary">
            {selectedFilter !== "All" &&
              selectedFilter !== "Search" &&
              selectedFilter}
          </div>
          <div className="px-2">
            <BrandCard />
          </div>
        </div>
      </div>
      <NavBar page="home" />
    </div>
  );
}
