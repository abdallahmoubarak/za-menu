import { Product } from "@/types/common";
import Image from "next/image";

export default function productCard({ product }: { product: Product }) {
  return (
    <div className="flex justify-between px-2 py-1 border-gray-200 border-b">
      <div className="flex-auto flex flex-col gap-1">
        <h2>{product.name}</h2>
        <div className="text-sm text-gray-400">{product?.description}</div>
        <div className="text-sm">{product.price} LBP</div>
      </div>
      <div className="min-w-fit self-center	">
        <Image src="/img/LemonGreenTea.webp" alt="" width={100} height={100} />
      </div>
    </div>
  );
}
