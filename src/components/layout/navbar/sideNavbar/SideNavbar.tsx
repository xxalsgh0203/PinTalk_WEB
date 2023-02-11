import { NavItem } from "../../../../data/navbar/navbars";
import cls from "../../../../utils/cls";
import SideSubNavs from "./SideSubNavs";

interface Props {
  active: boolean;
  navItems: NavItem[];
}

const SideNavbar = ({ active, navItems }: Props) => {
  return (
    <div
      className={cls(
        active ? "scale-x-100" : "scale-x-0",
        "fixed origin-bottom-left top-[60px] w-full z-50 transition-all",
      )}
    >
      <ul className="bg-gray-50 shadow-sm shadow-black  w-[60vw] lg:w-[30vw] h-screen">
        {navItems?.map((item) => (
          <SideSubNavs key={item.id} {...item} />
        ))}
      </ul>
    </div>
  );
};
export default SideNavbar;
