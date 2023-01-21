import { HiArrowLeft } from "react-icons/hi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useRouter } from "next/dist/client/router";
import Image from "next/image";
export default function Menu() {
  const router = useRouter();
  const categorySection = "Milk Tea";
  return (
    <>
      <div className="flex justify-between items-center bg-primary p-1">
        <div className="flex items-center">
          <span
            className="p-3  cursor-pointer"
            onClick={() => router.replace("/")}>
            <HiArrowLeft />
          </span>
          <span>business name - region</span>
        </div>
        <div className="cursor-pointer p-3 ">
          <BsThreeDotsVertical />
        </div>
      </div>
      <Image
        className="mx-auto"
        src={"/img/Hamburger.png"}
        alt={""}
        height={300}
        width={800}
      />
      {/* menu items and categories */}
      <ul className="flex flex-nowrap overflow-auto gap-4 text-sm p-1">
        {categories.map((category, i) => (
          <li
            key={i}
            className={`whitespace-nowrap px-2 py-1 rounded-md cursor-pointer ${
              category === categorySection ? "bg-primary" : ""
            }`}>
            {category}
          </li>
        ))}
      </ul>
    </>
  );
}

const categories = [
  "Fruits Tea",
  "Milk Tea",
  "Special Tea",
  "Coffee",
  "Milk Shakes",
  "Sugar Milk",
  "Souffle",
  "Frappe",
  "Dessert",
  "Topping",
  "Mochi",
];
