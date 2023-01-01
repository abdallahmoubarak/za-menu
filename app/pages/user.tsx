import Box from "@/components/Box";
import Logo from "@/components/Logo";
import NavBar from "@/components/NavBar";
import Option from "@/components/Option";
import Head from "next/head";
import Image from "next/image";
import { FaRegBell } from "react-icons/fa";
import {
  GrFavorite,
  GrLocation,
  GrCreditCard,
  GrCircleInformation,
} from "react-icons/gr";
import { IoWalletOutline } from "react-icons/io5";
import { BiSupport } from "react-icons/bi";

export default function User() {
  return (
    <div>
      <Head>
        <title>User</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
        />
      </Head>

      <div className="w-full">
        <Logo />
        <div className="px-2 pt-2 flex flex-col gap-3">
          <Box>
            <div className="flex justify-between">
              <div className="text-xl">
                <div>Hello,</div>
                <div>Abdallah Moubarak</div>
                <div className="text-sm">{"+961 7009 7533 >"}</div>
              </div>
              <div className="bg-gray-100 rounded-full w-max h-max p-2">
                <Image
                  src={"/svg/user.svg"}
                  alt={"user"}
                  width={50}
                  height={50}
                />
              </div>
            </div>
          </Box>
          <Box>
            <Option icon={<FaRegBell />} name={"Notifications"} />
            <Option icon={<GrFavorite />} name={"Favorites"} />
            <Option icon={<GrLocation />} name={"Address"} />
            <Option icon={<IoWalletOutline />} name={"Wallet"} />
            <Option icon={<GrCreditCard />} name={"Payment"} />
          </Box>
          <Box>
            <Option icon={<GrCircleInformation />} name={"About"} />
            <Option icon={<BiSupport />} name={"Support"} />
          </Box>
          <div className="px-4 cursor-pointer">Logout</div>
        </div>
      </div>
      <NavBar page="user" />
    </div>
  );
}
