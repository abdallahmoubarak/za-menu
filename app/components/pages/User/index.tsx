import Box from "@/components/Box";
import Option from "@/components/Option";
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
import { client } from "pages/_app";
import { graphQLClient } from "@/utils/graphQLInstance";

export default function UserPage() {
  return (
    <div>
      <div className="px-2 pt-2 flex flex-col gap-3">
        <Box>
          <div className="flex justify-between cursor-pointer">
            <div className="pt-2">
              <div className="text-xl">Hello,</div>
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
        <div
          className="px-4 cursor-pointer"
          onClick={() => {
            client.setQueryData(["User"], null);
            localStorage.removeItem("JWT");
            localStorage.removeItem("User");
            graphQLClient.setHeaders({ authorization: "" });
          }}>
          Logout
        </div>
      </div>
    </div>
  );
}
