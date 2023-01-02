import Image from "next/image";
import { GrFavorite } from "react-icons/gr";
import { BsClock } from "react-icons/bs";
import { HiLocationMarker } from "react-icons/hi";

export default function BrandCard() {
  return (
    <div className="relative p-2 pt-4 rounded-lg shadow-[0_0_10px_-3px_rgba(0,0,0,0.3)] max-w-lg">
      <div className="absolute top-2 right-2">
        <GrFavorite />
      </div>
      <div className="flex gap-2 overflow-hidden">
        <div className="border border-primary border-1 rounded-full w-max p-2">
          <Image
            className="rounded-3xl"
            src={"/img/Mogetee.png"}
            alt={""}
            width={80}
            height={80}
          />
        </div>
        <div className="flex flex-col justify-between min-h-full flex-auto pt-2 pr-6">
          <div>
            <div className="text-2xl">MOGE TEE</div>
          </div>
          <div className="text-sm text-gray-400 ">
            <div className="flex items-center gap-2">
              <BsClock />
              <div>Open till : 9:00 PM</div>
            </div>
            <div className="flex items-center gap-2">
              <HiLocationMarker />
              <div>300 m</div>
            </div>
          </div>
        </div>
        <div className="rotate-[-90deg] whitespace-nowrap w-4 absolute right-2 bottom-2 text-gray-400">
          MOGE TEE
        </div>
      </div>
    </div>
  );
}
