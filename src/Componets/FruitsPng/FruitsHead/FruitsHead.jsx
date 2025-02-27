import FruitsBg from "../../../assets/FruitsPngImg/FruitsBg.png";

const BgStyle = {
  backgroundImage: `url(${FruitsBg})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
  width: "100%",
  height: "100%",
  blur: "sm",
};
const FruitsHead = () => {
  return (
    <>
      <section className="h-[400px] ">
        <div style={BgStyle} className=" flex justify-center items-center text-center">
          <div className="text-white 2xl:w-4/12 w-6/12 ">
            <h1 className="text-[40px] font-semibold">Fresh & Juicy Fruits</h1>
            <p className="text-lg text-gray-200 ">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default FruitsHead;
