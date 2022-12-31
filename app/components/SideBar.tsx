import Image from "next/image";

export default function SideBar() {
  return (
    <>
      <div className="bg-primary w-16 pt-4 text-center">
        <div className="flex justify-center cursor-pointer">
          <Image src={"/svg/burger.svg"} alt="|||" width={40} height={40} />
        </div>
        <ul className="pt-10">
          <li className="cursor-pointer">All</li>
          <div className="items-container">
            {menuItems.map((item, i) => (
              <li key={i} className="pt-4 cursor-pointer">
                {item}
              </li>
            ))}
          </div>
        </ul>
      </div>
      <style jsx>{`
        .items-container {
          display: flex;
          align-items: center;
          width: 70vh;
          transform: rotate(90deg) translateY(-1.4rem);
          transform-origin: left bottom;
          position: relative;
          gap: 2rem;
          overflow: auto;
        }
      `}</style>
    </>
  );
}

const menuItems: string[] = ["Cafe", "Restaurant", "Retail", "Online"];
