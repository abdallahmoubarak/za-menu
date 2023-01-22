import { HiArrowLeft } from "react-icons/hi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useRouter } from "next/dist/client/router";
import Image from "next/image";

export default function MenuTopBar({
  businessName,
  region,
}: {
  businessName: String;
  region: String;
}) {
  const router = useRouter();
  return (
    <>
      <div className="flex justify-between items-center bg-primary p-1 sticky top-0 shadow-md">
        <div className="flex items-center">
          <span
            className="p-3 cursor-pointer"
            onClick={() => router.replace("/")}>
            <HiArrowLeft />
          </span>
          <span>
            {businessName} - {region}
          </span>
        </div>
        <div className="cursor-pointer p-3 ">
          <BsThreeDotsVertical />
        </div>
      </div>
      <div className="h-60 overflow-hidden sticky top-12 z-[-2]">
        <Image
          className="mx-auto z-[-1]"
          src={"/img/mogeteeprofile.png"}
          alt={""}
          height={200}
          width={600}
        />
        <div className="absolute top-0 z-[-3] w-screen h-full bg-[url('/img/mogeteeprofile.png')] bg-cover blur-2xl">
          a
        </div>
      </div>
    </>
  );
}
