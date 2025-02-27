import { FaFacebookF, FaGoogle } from "react-icons/fa";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { RiWhatsappFill } from "react-icons/ri";

import Allen from "../../../assets/AboutPageImg/Pavan.png";
import Olivia from "../../../assets/AboutPageImg/khushi.png";

const ExpertsData = [
  {
    id: 1,
    img: Allen,
    name: "Allen Smith",
    text: "Nutrition Specialist",
    socials: {
      facebook: "#",
      instagram: "#",
      whatsapp: "#",
      google: "#",
    },
  },
  {
    id: 2,
    img: Olivia,
    name: "Olivia Smith",
    text: "Dietitian & Health Coach",
    socials: {
      facebook: "#",
      instagram: "#",
      whatsapp: "#",
      google: "#",
    },
  },
  {
    id: 3,
    img: Allen,
    name: "Allen Smith",
    text: "Wellness Expert",
    socials: {
      facebook: "#",
      instagram: "#",
      whatsapp: "#",
      google: "#",
    },
  },
];

const Experts = () => {
  return (
    <section className="bg-white py-16 md:py-32 font-montserrat">
      <div className="container">
        {/* Heading */}
        <div className="text-center pb-20">
          <h1 className="text-3xl md:text-4xl font-semibold">
            Our Experts in Healthy Living
          </h1>
        </div>

        {/* Experts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ExpertsData.map((expert) => (
            <div
              key={expert.id}
              className="group relative overflow-hidden shadow-md bg-[#F9F9F9] hover:bg-white duration-500"
            >
              <img
                src={expert.img}
                alt={expert.name}
                className="h-full  object-cover"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex flex-col justify-end items-center p-5 text-center">
                <h1 className="text-2xl font-semibold text-secondary">
                  {expert.name}
                </h1>
                <p className="text-white text-sm">{expert.text}</p>
                {/* Social Links */}
                <div className="flex gap-x-3 pt-3">
                  <a href={expert.socials.facebook} target="_blank" rel="noopener noreferrer">
                    <FaFacebookF className="text-xl text-white hover:scale-125 duration-200 cursor-pointer hover:text-primary" />
                  </a>
                  <a href={expert.socials.instagram} target="_blank" rel="noopener noreferrer">
                    <BiLogoInstagramAlt className="text-xl text-white hover:scale-125 duration-200 cursor-pointer hover:text-primary" />
                  </a>
                  <a href={expert.socials.whatsapp} target="_blank" rel="noopener noreferrer">
                    <RiWhatsappFill className="text-xl text-white hover:scale-125 duration-200 cursor-pointer hover:text-primary" />
                  </a>
                  <a href={expert.socials.google} target="_blank" rel="noopener noreferrer">
                    <FaGoogle className="text-xl text-white hover:scale-125 duration-200 cursor-pointer hover:text-primary" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experts;
