import { styles } from "@/utils/styles";
import Image from "next/image";

export default function SideBar() {
  return (
    <>
      <div className="sidebar">
        <Image src={"/svg/burger.svg"} alt="|||" width={40} height={40} />
        <ul>
          <li>All</li>
          <div className="items-container">
            <li className="item">Cafes</li>
            <li className="item">Restorants</li>
            <li className="item">Retails</li>
            <li className="item">Onlines</li>
          </div>
        </ul>
      </div>
      <style jsx>{`
        .sidebar {
          width: 4.2rem;
          background: var(--primary-color);
          padding-top: 1rem;
          text-align: center;
        }
        ul {
          padding-top: 2.6rem;
        }
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
        .item {
          padding-top: 1.4rem;
        }
      `}</style>
    </>
  );
}
