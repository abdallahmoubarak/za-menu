import { styles } from "@/utils/styles";
import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Za Menu</title>
        <meta name="Za Menu" content="A menu for every business" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container">
        <div className="sidebar"> ||| </div>
        <div className="body">
          <div className="logo">
            <Image src={"/svg/Za-menu.svg"} alt="" width={200} height={50} />
          </div>
        </div>
      </div>
      <style jsx>{`
        .container {
          width: 100vw;
          height: 100vh;
          overflow: hidden;
          display: flex;
        }
        .sidebar {
          background: ${styles.primaryColor};
        }
        .logo {
          text-align: center;
        }
        .body {
          width: 100%;
          padding: 0.6rem;
        }
      `}</style>
    </div>
  );
}
