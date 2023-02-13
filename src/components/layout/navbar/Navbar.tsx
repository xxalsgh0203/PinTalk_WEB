import { useNavigate } from "react-router-dom";

import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import useWindowSize from "../../../hooks/useWindowSize";
import { navbarsMain } from "../../../data/navbar/navbars";
import NavDropdown from "./NavDropdown";
import MainLogo from "../MainLogo";
import { useEffect, useState } from "react";

interface Props {
  title?: string;
}

const Navbar = ({ title }: Props) => {
  const [isActive, setIsActive] = useState(false);
  const { smallWindowSize } = useWindowSize();
  const navigate = useNavigate();

  const onPage = (navId?: string) => {
    navigate(`/${navId}`);
  };

  const handleDropDown = () => {
    setIsActive(false);
  };

  useEffect(() => {
    !smallWindowSize && setIsActive(false);
  }, [smallWindowSize]);

  return (
    <div className="relative">
      <div className="flex items-center justify-between p-4 bg-white">
        <MainLogo />
        <h1>{title}</h1>

        {smallWindowSize ? (
          <div onClick={() => setIsActive((prev) => !prev)} className="cursor-pointer">
            {isActive ? <AiOutlineClose size={25} /> : <GiHamburgerMenu size={25} />}
          </div>
        ) : (
          <ul className="z-10 flex items-center space-x-6 text-kukmin-dark-brown font-semi-bold text-lg">
            {navbarsMain.map((item) => (
              <li key={item.id}>
                <span
                  onClick={() => onPage(item.id)}
                  className="block p-1 hover:bg-gray-100 rounded-lg transition-all cursor-pointer"
                >
                  {item.title}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
      {
        <NavDropdown
          active={isActive}
          navigationItems={navbarsMain}
          handleDropDown={handleDropDown}
        />
      }
    </div>
  );
};

export default Navbar;
