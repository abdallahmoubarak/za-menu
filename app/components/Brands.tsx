import Image from "next/image";

export default function Brands() {
  return (
    <div className="flex items-center relative p-2 gap-2 rounded-lg shadow-[0_0_10px_-3px_rgba(0,0,0,0.3)]">
      <div className="border border-primary border-1 rounded-full w-max p-2">
        <Image
          className="rounded-3xl"
          src={"/img/Mogetee.png"}
          alt={""}
          width={80}
          height={80}
        />
      </div>
      <div className="flex flex-col justify-between h-full flex-auto pr-6">
        <div>
          <div className="text-gray-400">icons</div>
          <div className="text-xl">MOGE TEE</div>
        </div>
        <div className="text-sm text-gray-400">
          <div>Open till : 9:00 PM</div>
          <div>300 m</div>
        </div>
      </div>
      <div className="rotate-[-90deg] whitespace-nowrap w-4 absolute right-2 bottom-2">
        MOGE TEE
      </div>
    </div>
  );
}
