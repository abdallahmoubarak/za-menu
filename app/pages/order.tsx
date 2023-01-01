import Logo from "@/components/Logo";
import NavBar from "@/components/NavBar";
import Head from "next/head";
import Image from "next/image";

export default function Order() {
  return (
    <div>
      <Head>
        <title>Order</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
        />
      </Head>

      <div className="w-full">
        <Logo />
        <div className="h-full w-full ">
          <div className="mx-auto w-max pt-32">
            <Image
              src={"/svg/no-order.svg"}
              alt={"No order"}
              width={200}
              height={200}
            />
          </div>
        </div>
      </div>
      <NavBar page="order" />
    </div>
  );
}
