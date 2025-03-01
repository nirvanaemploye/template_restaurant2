import { FaCaretDown, FaUser } from "react-icons/fa";
import { MdMenu } from "react-icons/md";
import { Link } from "react-router-dom";
import ResponsiveMenu from "./ResponsiveMenu";
import { useState } from "react";

const navlink = [
  { id: 1, name: "Home", link: "/" },
  { id: 2, name: "About", link: "/about" },
  { id: 3, name: "Contact", link: "/contact" },
];

const Dropdownlink = [
  { id: 1, name: "Vegetables", link: "#" },
  { id: 2, name: "Fruits", link: "/fruits" },
  { id: 3, name: "Grains", link: "#" },
];

const Navbar = ({ HandlePopup }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div data-aos="fade" className="bg-white shadow-md py-3">
        <div className="container flex justify-between items-center">
          {/* Logo */}
          <div className="font-semibold text-3xl">
            <p>LOGO</p>
          </div>

          {/* Navigation & Actions */}
          <div className="flex items-center space-x-6">
            {/* Desktop Nav Links */}
            <nav className="hidden lg:block">
              <ul className="flex items-center gap-12">
                {navlink.map(({ id, name, link }) => (
                  <li key={id}>
                    <Link
                      to={link}
                      className="text-xl font-semibold hover:text-secondary"
                    >
                      {name}
                    </Link>
                  </li>
                ))}

                {/* Dropdown Menu */}
                <li className="relative group cursor-pointer">
                  <div className="flex items-center gap-1 py-2 text-xl font-semibold hover:text-secondary">
                    <span>Dropdown</span>
                    <FaCaretDown className="group-hover:rotate-180 transition-transform duration-300" />
                  </div>

                  {/* Dropdown Links */}
                  <div className="absolute z-[9999] hidden group-hover:block w-[180px] bg-white shadow-md p-2">
                    <ul>
                      {Dropdownlink.map(({ id, name, link }) => (
                        <li key={id}>
                          <Link
                            to={link}
                            className="block w-full text-xl p-2 rounded-md hover:bg-secondary/20"
                          >
                            {name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              </ul>
            </nav>

            {/* Account Button & Mobile Menu Icon */}
            <div className="flex items-center space-x-3">
              <button
                onClick={HandlePopup}
                className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-full sm:text-lg hover:scale-110 transition-transform"
              >
                <FaUser />
                Account
              </button>

              {/* Mobile Menu Toggle */}
              <button
                className="lg:hidden"
                onClick={() => setIsOpen(!isOpen)}
              >
                <MdMenu className="text-4xl" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Responsive Menu for Mobile */}
      <ResponsiveMenu isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default Navbar;
