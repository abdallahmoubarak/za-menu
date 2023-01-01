import Image from "next/image";

export default function SideBar({
  selectedFilter,
  setSelectedFilter,
}: sideBarTypes) {
  return (
    <>
      <div className="bg-primary w-16 pt-4 text-center">
        {/* <div className="flex justify-center cursor-pointer">
          <Image src={"/svg/burger.svg"} alt="|||" width={40} height={40} />
        </div> */}
        <ul className="pt-24">
          <li
            className={`cursor-pointer ${selectedFilter === "All" && "active"}`}
            onClick={() => setSelectedFilter("All")}>
            All
          </li>
          <div className="flex items-end w-[70vh] gap-4 relative items-container">
            {menuItems.map((item, i) => (
              <div
                key={i}
                className={`cursor-pointer px-2 rounded-b-md ${
                  selectedFilter === item && "active"
                }`}
                onClick={() => setSelectedFilter(item)}>
                {item}
              </div>
            ))}
          </div>
        </ul>
      </div>
      <style jsx>{`
        .items-container {
          transform: rotate(90deg) translateY(-1.4rem);
          transform-origin: left bottom;
        }
        .active {
          background: white;
          padding-bottom: 0.5rem;
          padding-top: 0.5rem;
        }
      `}</style>
    </>
  );
}

const menuItems: string[] = ["Cafe", "Restaurant", "Retail", "Online"];
type sideBarTypes = { selectedFilter: string; setSelectedFilter: Function };
