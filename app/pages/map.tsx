import Logo from "@/components/Logo";
import NavBar from "@/components/NavBar";
import Head from "next/head";

export default function Map() {
  return (
    <div>
      <Head>
        <title>Map</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
        />
      </Head>

      <div className="w-full">
        <Logo />
      </div>
      <NavBar page="map" />
    </div>
  );
}
