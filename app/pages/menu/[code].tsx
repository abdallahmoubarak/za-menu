import { HiArrowLeft } from "react-icons/hi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useRouter } from "next/dist/client/router";
export default function Menu() {
  const router = useRouter();
  return (
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
  );
}
