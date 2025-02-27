import { ImPower } from "react-icons/im";
import Benefits1 from "../../../assets/HomePngImg/Benefits1.png";
import Benefits2 from "../../../assets/HomePngImg/Benefits2.png";
import Benefits3 from "../../../assets/HomePngImg/Benefits3.png";
import { LuBicepsFlexed } from "react-icons/lu";
import { GiBattery100 } from "react-icons/gi";

// Benefits Data Array
const BenefitsData = [
  {
    id: 1,
    img: Benefits1,
    title: "Improved Energy Levels", // fixed typo
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    icon: <ImPower className="lg:text-4xl text-2xl" />,
  },
  {
    id: 2,
    img: Benefits2,
    title: "Stronger Bones & Muscles",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    icon: <LuBicepsFlexed className="lg:text-4xl text-2xl" />,
  },
  {
    id: 3,
    img: Benefits3,
    title: "Boosts Immunity",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    icon: <GiBattery100 className="lg:text-4xl text-2xl" />,
  },
];

// Benefit Card Component (Optimized)

const Benefits = () => {
  return (
    <section className="container py-32 font-montserrat">
      <div>
        {/* Heading Section */}
        <div className="text-center">
          <h1 className="text-[40px] font-medium">Benefits</h1>
          <p className="text-[20px] pt-5 text-primaryDark">
            The Benefits of Delicious, Nourishing Meals
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-3 lg:gap-10 gap-10 pt-20">
          {BenefitsData.map((item) => (
            <div key={item.id}>
              <div className="group flex flex-col items-center bg-[#F9F9F9] hover:bg-white hover:border hover:border-primary xl:py-10 p-6 relative hover:scale-105 duration-700 ease-in-out shadow-md">
                <img
                  src={item.img}
                  alt={item.title} // Accessibility improvement
                  className="h-auto object-contain" // Ensuring consistent image sizing
                />
                <h1 className="lg:text-[22px] md:text-lg font-semibold pt-6 text-center">
                  {item.title}
                </h1>
                <p className="text-[15px] pt-4 text-center px-0 text-[#676565] leading-6 line-clamp-2">
                  {item.text}
                </p>
                <div className="absolute lg:h-20 lg:w-20 h-12 w-12 rounded-full bg-white group-hover:bg-primary top-1 text-primary group-hover:text-white flex justify-center items-center duration-500 ease-in-out">
                  {item.icon}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
