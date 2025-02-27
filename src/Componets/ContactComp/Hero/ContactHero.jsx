import headImgt from "../../../assets/ContactPngImg/Contact_BG.png";

const BgStyle = {
  backgroundImage: `url(${headImgt})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
  width: "100%",
};
const ContactHero = () => {
  return (
    <>
      <section style={BgStyle} >
        <div className="md:h-[350px] h-[250px] container flex flex-col justify-center text-ellipsis items-center gap-2">
          <h1 className="text-4xl text-black">
          Contact
          </h1>
          <div className="flex flex-row space-x-2">
            <a href="" className="text-primary font-semibold">Home </a>
            <p className="text-primary font-semibold"> / </p>
            <a href="" className="text-primary font-semibold">About</a>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactHero;
