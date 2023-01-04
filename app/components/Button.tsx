import { MouseEventHandler } from "react";
import Image from "next/image";
import Loading from "@/public/svg/Loading.svg";

export default function Button({
  text = "button",
  onClick,
  isSecondary,
  font = "1.2rem",
  isLoading,
  disabled,
}: buttonProps) {
  return (
    <button className="bg-primary rounded-md p-2 w-full" onClick={onClick}>
      {isLoading ? (
        <div className="loading">
          <Image src={Loading} height={50} width={50} alt={""} />
        </div>
      ) : (
        text
      )}
    </button>
  );
}

type buttonProps = {
  text: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  isSecondary?: boolean;
  font?: string;
  isLoading?: boolean;
};
