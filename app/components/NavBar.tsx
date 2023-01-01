import { useRouter } from "next/dist/client/router";
import Image from "next/image";

export default function NavBar({ page }: { page?: string }) {
  const router = useRouter();
  return (
    <div className="fixed flex items-center bottom-4 gap-4 justify-evenly py-2 px-2 shadow-[0_0_20px_-8px_rgba(0,0,0,0.3)] rounded-2xl w-10/12 left-[8%] bg-white">
      {navItemsName.map((item, i) => (
        <div
          key={i}
          className={`cursor-pointer p-1 rounded-full  ${
            item === page && "bg-primary"
          }`}
          onClick={() =>
            item !== "home" ? router.push(`/${item}`) : router.push(`/`)
          }>
          <Image
            src={`/svg/${item}.svg`}
            alt={`${item}`}
            width={30}
            height={30}
          />
        </div>
      ))}
    </div>
  );
}

const navItemsName: string[] = ["home", "map", "order", "user"];
