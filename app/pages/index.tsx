import SideBar from "@/components/SideBar";
import Head from "next/head";
import Image from "next/image";

export default function Home() {
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
        <SideBar />
        <div className="w-full p-3 pt-4">
          <div className="mx-auto w-max">
            <Image src={"/svg/za-menu.svg"} alt="" width={200} height={50} />
          </div>
        </div>
      </div>
    </div>
  );
}
