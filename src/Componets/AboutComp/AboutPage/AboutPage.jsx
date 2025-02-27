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
          <a href="" className="text-primary font-semibold">
            Home{" "}
          </a>
          <p className="text-primary font-semibold"> / </p>
          <a href="" className="text-primary font-semibold">
            About
          </a>
        </div>

        <img src={Dish} alt="" className="h-1/2 " />
      </section>
    </>
  );
};

export default AboutPage;
