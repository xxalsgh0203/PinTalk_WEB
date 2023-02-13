import { NavItem } from "../../../../data/navbar/navbars";
import cls from "../../../../utils/cls";
import SideSubNavs from "./SideSubNavs";
import useOnClickOutside from "../../../../hooks/useOnClickOutside";
import { useRef } from "react";

interface Props {
  active: boolean;
  navItems: NavItem[];
  handleOutsideClick: () => void;
}

const SideNavbar = ({ active, navItems, handleOutsideClick }: Props) => {
  const sidebarRef = useRef<HTMLUListElement>(null);
  useOnClickOutside<HTMLUListElement>(sidebarRef, handleOutsideClick);
  return (
    <div
      className={cls(
        active ? "scale-x-100" : "scale-x-0",
        "fixed origin-bottom-left top-[70px] w-full z-50 transition-all",
      )}
    >
      <ul
        ref={sidebarRef}
        className="bg-gray-50 shadow-sm shadow-black  w-[60vw] lg:w-[30vw] h-screen"
      >
        {navItems?.map((item) => (
          <SideSubNavs key={item.id} {...item} />
        ))}
      </ul>
    </div>
  );
};
export default SideNavbar;
