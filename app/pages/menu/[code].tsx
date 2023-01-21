import { HiArrowLeft } from "react-icons/hi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useRouter } from "next/dist/client/router";
import Image from "next/image";
import { categories, products } from "@/utils/data";
export default function Menu() {
  const router = useRouter();
  const categorySection = "Milk Tea";
  return (
    <div className="h-fit">
      <div className="flex justify-between items-center bg-primary p-1 sticky top-0 shadow-md">
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
        className="mx-auto sticky top-12 z-[-2]"
        src={"/img/Hamburger.png"}
        alt={""}
        height={300}
        width={800}
      />
      {/* menu items and categories */}
      <ul className="flex flex-nowrap overflow-auto gap-4 text-sm p-1 sticky top-12 bg-white shadow-md">
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
      <div className="bg-white">
        <ul>
          {categories.map((category, i) => (
            <>
              <li className="bg-primary text-2xl px-2 py-1">{category}</li>
              <ul>
                {products
                  .filter((product) => product.category === category)
                  .map((item, i) => (
                    <li className="px-2 py-1" key={i}>
                      {item.name}
                    </li>
                  ))}
              </ul>
            </>
          ))}
        </ul>
      </div>
    </div>
  );
}

const catgor = [
  {
    name: "food",
    products: [
      { name: "burger", price: 3.3 },
      { name: "cheese-burger", price: 3.3 },
    ],
  },
  { name: "Beverage", products: [{ name: "burger", price: 3.3 }] },
];
