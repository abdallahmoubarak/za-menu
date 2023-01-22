import { categories } from "@/utils/data";
import MenuTopBar from "@/components/pages/menu/MenuTopBar";
import { useState } from "react";
import ProductCard from "@/components/pages/menu/ProductCard";

export default function Menu() {
  const [activeCategory, setactiveCategory] = useState(categories[0].name);

  const handleClick = (category: string) => {
    setactiveCategory(category);
  };

  return (
    <div className="h-fit">
      <MenuTopBar businessName={"Moge Tee"} region={"Nabatieh"} />

      <ul className="flex flex-nowrap overflow-auto gap-4 text-sm p-1 sticky top-12 bg-white shadow-md">
        {categories?.map((category, i) => (
          <li
            key={i}
            className={`whitespace-nowrap px-2 py-1 rounded-md cursor-pointer ${
              category?.name === activeCategory ? "bg-primary" : ""
            }`}
            onClick={() => handleClick(category?.name)}>
            {category?.name}
          </li>
        ))}
      </ul>
      <div className="bg-white">
        {categories?.map((category, i) => (
          <section key={i} id={category.name}>
            <h1 className="bg-primary text-2xl text-left px-2 py-1">
              {category?.name}
            </h1>
            <ul>
              {category.products?.map((product, j) => (
                <li key={j}>
                  <ProductCard product={product} />
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
