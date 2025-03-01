import { motion, AnimatePresence } from "framer-motion";
import { FaCaretDown } from "react-icons/fa";
import { Link } from "react-router-dom";

const navlink = [
  { id: 1, name: "Home", link: "/" },
  { id: 2, name: "About", link: "/about" },
  { id: 3, name: "Contact", link: "/contact" },
];

const Dropdownlink = [
  { id: 1, name: "Vegetables", link: "#" },
  { id: 2, name: "Fruits", link: "/Fruits" },
  { id: 3, name: "Grains", link: "#" },
];

const ResponsiveMenu = ({ isOpen }) => {
  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.3 }}
          className="absolute top-18 w-full text-center z-30 lg:hidden bg-primary rounded-xl text-white py-10"
        >
          <div className="text-xl font-semibold uppercase">
            <ul>
              {navlink.map(({ id, name, link }) => (
                <li key={id} className="py-2">
                  <Link
                    to={link}
                    className="inline-block hover:text-secondary text-xl font-semibold"
                  >
                    {name}
                  </Link>
                </li>
              ))}

              {/* Dropdown Menu */}
              <li className="lg:hidden inline-block cursor-pointer group w-full space-2 ">
                <a
                  href="#"
                  className="inline-block hover:text-secondary text-xl font-semibold"
                >
                  <div className="flex items-center gap-[2px] py-2 w-full text-white">
                    Dropdown{" "}
                    <span>
                      <FaCaretDown className="group-hover:rotate-180 duration-300 " />
                    </span>
                  </div>
                </a>
                {/* dropdown section  */}
                <div className="hidden group-hover:block text-white/95 bg-secondary/40 mx-10 rounded-xl">
                  <ul>
                    {Dropdownlink.map(({ id, name, link }) => (
                      <li key={id}>
                        <Link
                          to={link}
                          className="inline-block w-full text-xl p-2 rounded-md hover:bg-secondary/20"
                        >
                          {name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ResponsiveMenu;
