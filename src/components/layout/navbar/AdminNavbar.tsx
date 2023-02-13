import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

import { Link } from "react-router-dom";
import { navbarsAdmin } from "../../../data/navbar/navbars";

import SideNavbar from "./sideNavbar/SideNavbar";

interface Props {
  title: string;
}

const AdminNavbar = ({ title }: Props) => {
  const [isActive, setIsActive] = useState(false);

  const handleOutsideClick = () => {
    setIsActive(false);
  };

  return (
    <div>
      <div className="fixed w-full p-3 flex items-center justify-center bg-white shadow-md z-40">
        <div className="absolute left-10 flex items-center">
          <span
            onClick={() => setIsActive((prev) => !prev)}
            className="text-amber-500 hover:text-amber-600 transition-all cursor-pointer inline-block"
          >
            {isActive ? <AiOutlineClose size={30} /> : <GiHamburgerMenu size={30} />}
          </span>
        </div>
        <span className="inline-block p-2 font-bold text-xl">{title}</span>
        <div className="space-x-6 absolute right-10 flex items-center">
          <Link to="/admin">
            <button className="bg-amber-500 text-white rounded-md px-2 hover:bg-amber-600 transition-all cursor-pointer">
              관리자 홈
            </button>
          </Link>
          <Link to="/">
            <button className="bg-amber-500 text-white rounded-md px-2 hover:bg-amber-600 transition-all cursor-pointer">
              홈
            </button>
          </Link>
        </div>
      </div>

      <SideNavbar
        active={isActive}
        navItems={navbarsAdmin}
        handleOutsideClick={handleOutsideClick}
      />
    </div>
  );
};
export default AdminNavbar;
