import Box from "@/components/Box";
import Option from "@/components/Option";
import Image from "next/image";
import { BiSupport } from "react-icons/bi";
import {
  BsShop,
  BsCreditCard,
  BsHeart,
  BsInfoCircle,
  BsGeoAlt,
  BsBell,
  BsWallet2,
} from "react-icons/bs";
import { client } from "pages/_app";
import { graphQLClient } from "@/utils/graphQLInstance";
import Link from "next/link";

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
          {options.map((option, i) => (
            <Link href={option.link || ""}>
              <Option key={i} icon={option.icon} name={option.name} />
            </Link>
          ))}
        </Box>
        <Box>
          <Option icon={<BsInfoCircle />} name={"About"} />
          <Option icon={<BiSupport />} name={"Support"} />
        </Box>
        <Box>
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
        </Box>
      </div>
    </div>
  );
}
const options = [
  { icon: <BsShop />, name: "Business", link: "/gm/businesses" },
  { icon: <BsBell />, name: "Notifications" },
  { icon: <BsHeart />, name: "Favorites" },
  { icon: <BsGeoAlt />, name: "Address" },
  { icon: <BsWallet2 />, name: "Wallet" },
  { icon: <BsCreditCard />, name: "Payment" },
];
