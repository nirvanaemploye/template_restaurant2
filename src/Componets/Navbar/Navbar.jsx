import { FaCaretDown, FaUser } from "react-icons/fa";

const navlink = [
  {
    id: 1,
    name: "Home",
    link: "#",
  },
  {
    id: 2,
    name: "About",
    link: "#",
  },
  {
    id: 3,
    name: "Contact",
    link: "#",
  },
];

const Dropdownlink = [
  {
    id: 1,
    name: "Vegetables",
    link: "#",
  },
  {
    id: 2,
    name: "Fruits",
    link: "#",
  },
  {
    id: 3,
    name: "Grains",
    link: "#",
  },
];

const Navbar = ({HandlePopup}) => {
  return (
    <>
      <div data-aos="fade" className="bg-white shadow-md">
        <div className="container flex justify-between py-4 sm:py-3 items-center">
          {/* logo section  */}
          <div className="font-bold text-3xl">Logo</div>
          {/* Navlinks section  */}
          <div>
            <ul className="flex items-center gap-10">
              {navlink.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.link}
                    className="hidden md:inline-block hover:text-primary text-xl font-semibold"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
              {/* simple  dropdown and links  */}
              <li className="hidden md:inline-block cursor-pointer group ">
                <a
                  href="#"
                  className="inline-block hover:text-primary text-xl font-semibold"
                >
                  <div className="flex items-center gap-[2px] py-2">
                    Dropdown{" "}
                    <span>
                      <FaCaretDown className="group-hover:rotate-180 duration-300" />
                    </span>
                  </div>
                </a>
                {/* dropdown section  */}
                <div className="absolute  z-[9999] hidden group-hover:block w-[180px] bg-white text-black shadow-md p-2">
                  <ul>
                    {Dropdownlink.map(({ id, name, link }) => (
                      <li key={id}>
                        <a
                          href={link}
                          className=" text-xl w-full inline-block hover:bg-primary/20 p-2 rounded-md"
                        >
                          {name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
              {/* login button section  */}
              <li>
                <button 
                onClick={HandlePopup}
                className="flex justify-center items-center gap-2 bg-secondary sm:text-xl h-[40px] text-white px-3 sm:px-5 py-2 hover:scale-110 duration-300 rounded-sm">
                  <FaUser />
                  My Account
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
