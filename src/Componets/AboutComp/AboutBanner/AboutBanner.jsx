import Img from "../../../assets/AboutPageImg/AboutBannerImg.png";
import redImg from "../../../assets/AboutPageImg/red-bell-pepper-stone.png";
import yeloowImg from "../../../assets/AboutPageImg/FreesGreen.png";
import { MdArrowOutward } from "react-icons/md";

// Data array for link text
const links = [
  "Eat Well, Live Better",
  "Freshness Guaranteed",
  "Pure Ingredients, Pure Life",
  "Healthy Choices, Healthy Life",
];

const AboutBanner = () => {
  return (
    <section className=" relative container">
      <div className="py-40 grid grid-cols-1 lg:grid-cols-2 gap-10 font-montserrat relative z-20">
        {/* Image Section */}
        <div
          data-aos="zoom-in"
          data-aos-duration="900"
          className="flex justify-center"
        >
          <img src={Img} alt="About Banner" className="h-full object-cover" />
        </div>

        {/* Text Section */}
        <div className="space-y-7 flex flex-col items-center lg:items-start justify-center text-center lg:text-left">
          <h1 className="text-2xl md:text-4xl font-medium">
            Pure, Natural, and Delicious
          </h1>
          <p className="leading-8 w-11/12 lg:w-10/12 text-black/60">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>

          {/* Link Sections */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-2 font-semibold ">
            {links.map((linkText, index) => (
              <a href="#" key={index} className="flex items-center justify-center sm:justify-normal gap-x-1">
                <MdArrowOutward className="text-secondary text-2xl" />
                {linkText}
              </a>
            ))}
          </div>

          {/* Button */}
          <button className="bg-primary text-white rounded-full px-10 text-xl font-semibold py-4 hover:scale-110 duration-300">
            Read More
          </button>
        </div>

        {/* Decorative Images */}
        <img
          data-aos="fade-left"
          src={yeloowImg}
          alt="Yellow Decoration"
          className="h-44 opacity-40 md:opacity-100 hidden sm:block absolute bottom-16 right-0"
        />
        <img
          data-aos="fade-right"
          src={redImg}
          alt="Red Decoration"
          className="h-40 opacity-40 md:opacity-80 absolute -right-12 top-0 sm:bottom-0 sm:-left-12 sm:opacity-100"
        />
      </div>
    </section>
  );
};

export default AboutBanner;
