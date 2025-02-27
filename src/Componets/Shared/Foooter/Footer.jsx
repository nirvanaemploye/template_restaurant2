import { FaFacebookF, FaGoogle } from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { MdCall, MdLocationOn } from "react-icons/md";
import { IoMdMail } from "react-icons/io";
import FooterImg from "../../../assets/FooterImg.png";

const Footer = () => {
  return (
    <div className="bg-white text-white mt-36 text-ellipsis leading-snug">
      <div
        data-aos="fade"
        className="container pt-16 rounded-t-3xl"
        style={{
          backgroundImage: `url(${FooterImg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Heading Section */}
        <h1 className="xl:w-6/12 mx-auto text-3xl font-semibold text-center leading-relaxed">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </h1>

        {/* Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 border-b border-white/30 pt-16 pb-8">
          {/* Logo Section */}
          <div className="space-y-4">
            <h1 className="font-semibold text-3xl">LOGO</h1>
            <p className="text-lg leading-1 line-clamp-8">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.
            </p>
            <div className="flex gap-4">
              {[
                { icon: <FaFacebookF />, label: "Facebook" },
                { icon: <BiLogoInstagramAlt />, label: "Instagram" },
                { icon: <RiWhatsappFill />, label: "WhatsApp" },
                { icon: <FaGoogle />, label: "Google" },
              ].map(({ icon, label }, index) => (
                <span
                  key={index}
                  className="text-lg bg-slate-100 text-black p-2 rounded-full hover:scale-110 duration-200 cursor-pointer hover:bg-transparent flex items-center justify-center"
                  aria-label={label}
                >
                  {icon}
                </span>
              ))}
            </div>
          </div>

          {/* Links Section */}
          <div className="space-y-3 flex flex-col md:mx-auto">
            <h1 className="font-bold text-3xl text-start">Quick Links</h1>
            <a href="#" className="text-lg cursor-pointer hover:underline">
              Privacy Policy
            </a>
            <a href="#" className="text-lg cursor-pointer hover:underline">
              Terms & Conditions
            </a>
          </div>

          {/* Contact Section */}
          <div className="space-y-3 xl:ml-auto">
            <h1 className="font-bold text-3xl">Get in Touch</h1>
            <p className="text-lg flex items-center gap-2">
              <MdLocationOn className="text-2xl" />
              123 Main Street, Surat, Gujarat
            </p>
            <p className="text-lg flex items-center gap-2">
              <MdCall className="text-2xl" />
              +91 12345 56894
            </p>
            <p className="text-lg flex items-center gap-2">
              <IoMdMail className="text-2xl" />
              nirvanatechlabs123@gmail.com
            </p>
          </div>
        </div>

        {/* Copyright Section */}
        <p className="text-center p-4 text-lg">© 2022 TCJ. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
