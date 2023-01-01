import Image from "next/image";

export default function Logo() {
  return (
    <div className="p-3 pt-4">
      <div className="mx-auto w-max">
        <Image src={"/svg/logo.svg"} alt="" width={200} height={50} />
      </div>
    </div>
  );
}
