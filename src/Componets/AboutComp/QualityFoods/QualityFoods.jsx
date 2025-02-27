import FoodImg from "../../../assets/AboutPageImg/QFood.png";

const QualityFoodsData = [
  {
    id: "01",
    img: FoodImg,
    title: "Maintain Proper Hygiene",
    subtext:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    id: "02",
    img: FoodImg,
    title: "Fresh Ingredients Only",
    subtext: "We ensure only the freshest ingredients go into our meals.",
  },
  {
    id: "03",
    img: FoodImg,
    title: "Strict Quality Control",
    subtext: "Every step of our process is monitored for top-notch quality.",
  },
  {
    id: "04",
    img: FoodImg,
    title: "Expert Chefs",
    subtext: "Our skilled chefs bring passion and expertise to every dish.",
  },
];

const QualityFoods = () => {
  return (
    <div className="py-16 md:py-28 bg-gray-50 font-montserrat">
      <div className="container">
        {/* Heading section */}
        <div className="text-center space-y-8 xl:w-7/12 mx-auto pb-16">
          <h1
            data-aos="fade"
            className="tracking-wide text-4xl font-semibold text-dark"
          >
            How We Make Quality Foods
          </h1>
          <p data-aos="fade">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s.
          </p>
        </div>

        {/* Card Section */}
        <div data-aos="fade-up" data-aos-delay="300">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-5">
            {QualityFoodsData.map((item) => (
              <div key={item.id}>
                <div className="group flex flex-col items-center bg-[#F9F9F9] hover:bg-white hover:shadow-lg xl:p-10 p-7 relative hover:scale-105 duration-500 rounded-2xl space-y-3">
                  <img src={item.img} alt={item.title} className="relative" />
                  <div className="justify-center items-center flex h-16 w-16 bg-gray-100 absolute rounded-2xl top-14 left-14 rotate-45 group-hover:bg-primary duration-500 border-4 border-[#F9F9F9] border-spacing-4">
                    <p className="absolute text-primary text-3xl font-semibold -rotate-45 group-hover:text-white duration-500">
                      {item.id}
                    </p>
                  </div>
                  <h1 className="lg:text-[18px] md:text-lg font-semibold pt-6 text-center group-hover:text-secondary">
                    {item.title}
                  </h1>
                  <p className="text-[15px] pt-3 text-center text-[#676565] tracking-wider">
                    {item.subtext}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QualityFoods;
