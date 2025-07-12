"use client";
import { GiHamburgerMenu, GiCrossMark } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../../State/menuSlice";

const NavbarToggler = () => {
  const dispatch = useDispatch();
  const menuOpen = useSelector((state) => state.menu.menuOpen);

  const setToggleMenu = () => {
    dispatch(toggleMenu());
  };
  
  return (
    <button
      className="p-2 text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 rounded-full transition-all"
      onClick={setToggleMenu}
      aria-label={menuOpen ? "Close menu" : "Open menu"}
    >
      {menuOpen ? (
        <GiCrossMark className="text-2xl text-shadow-purple-600" />
      ) : (
        <GiHamburgerMenu className="text-2xl text-shadow-purple-600" />
      )}
    </button>
  );
};

export default NavbarToggler;