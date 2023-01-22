import { CategoryProps } from "@/types/common";
import { useState, useEffect } from "react";

const useMenu = (categories: CategoryProps[]) => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setActiveCategory(entry.target.id);
      }
    });
  });

  useEffect(() => {
    categories.forEach((category) => {
      const section = document.getElementById(category.name);
      if (section) {
        observer.observe(section);
      }
    });
    return () => observer.disconnect();
  }, [categories]);

  const handleCategoryClick = (name: string) => {
    setActiveCategory(name);
    const element = document.getElementById(name);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return { activeCategory, handleCategoryClick };
};

export default useMenu;
