import { motion } from "framer-motion";
import AboutImg from "../../../assets/AboutPageImg/Aboutbg.png";
import Dish from "../../../assets/AboutPageImg/Aboutdish.png";

const BgStyle = {
  backgroundImage: `url(${AboutImg})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
  width: "100%",
};
const AboutPage = () => {
  return (
    <>
      <section
        style={BgStyle}
        className="md:h-[350px] h-[250px]  flex flex-col  justify-end items-center text-ellipsis gap-2"
      >
        <h1 className="text-4xl text-black">About</h1>
        <div className="flex flex-row space-x-2">
          <a href="/" className="text-primary font-semibold">
            Home{" "}
          </a>
          <p className="text-primary font-semibold"> / </p>
          <a href="" className="text-primary font-semibold">
            About
          </a>
        </div>

        <motion.img
          src={Dish}
          alt="About Banner"
          className="h-1/2 object-cover"
          initial={{ opacity: 0, y: 20 }} // Start from invisible and 100px down
          animate={{ opacity: 1, y: 0 }} // End fully visible and at normal position
          transition={{ duration: 1 }} // 1 second animation
        />
      </section>
    </>
  );
};

export default AboutPage;
