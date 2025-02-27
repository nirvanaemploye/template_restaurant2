import { GoDotFill } from "react-icons/go";
import DietBg from "../../../assets/HomePngImg/DietPlanBg.png";

const BgStyle = {
  backgroundImage: `url(${DietBg})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
  width: "100%",
};

// Diet Plan Data
const DietPlanData = [
  {
    id: 1,
    planName: "Premium Plan",
    Price: "$100",
    text: [
      "Lorem Ipsum is simply dummy text",
      "Lorem Ipsum is simply dummy text",
      "Lorem Ipsum is simply dummy text",
      "Lorem Ipsum is simply dummy text",
      "Lorem Ipsum is simply dummy text",
    ],
  },
  {
    id: 2,
    planName: "Premium Plan",
    Price: "$100",
    text: [
      "Lorem Ipsum is simply dummy text",
      "Lorem Ipsum is simply dummy text",
      "Lorem Ipsum is simply dummy text",
      "Lorem Ipsum is simply dummy text",
      "Lorem Ipsum is simply dummy text",
    ],
  },
  {
    id: 3,
    planName: "Premium Plan",
    Price: "$100",
    text: [
      "Lorem Ipsum is simply dummy text",
      "Lorem Ipsum is simply dummy text",
      "Lorem Ipsum is simply dummy text",
      "Lorem Ipsum is simply dummy text",
      "Lorem Ipsum is simply dummy text",
    ],
  },
];
const DietPlan = () => {
  return (
    <>
      <section className=" bg-gray-50">
        <div className="container py-32 font-montserrat">
          {/* Headung Section  */}
          <div className="text-center">
            <h1 className="text-[40px] font-medium">Diet Plan</h1>
            <p className="text-[20px] pt-5 text-primaryDark">
              Our Healthy Meal Plans{" "}
            </p>
          </div>
          {/* Card Section  */}
          <div className="grid md:grid-cols-3 gap-x-8 gap-y-8 p-4 pt-20">
            {DietPlanData.map((item) => (
              <div
                key={item.id}
                className="bg-transparent hover:bg-white rounded-2xl hover:border text-center items-center justify-center flex flex-col hover:scale-105 duration-300 pb-10"
              >
                <div
                  style={BgStyle}
                  className="rounded-2xl py-6 text-center space-y-2"
                >
                  <h1 className="text-xl font-semibold">{item.planName}</h1>
                  <h1 className="text-2xl font-semibold text-primary">
                    {item.Price}
                  </h1>
                </div>
                <ul className=" text-gray-600 space-y-5 py-10">
                  {item.text.map((item, i) => (
                    <li key={i} className="flex items-center">
                      <span className="text-green-500 pr-2">
                        <GoDotFill className="text-black" />
                      </span>{" "}
                      {item}
                    </li>
                  ))}
                </ul>
                <button className="text-lg font-semibold bg-primary text-white px-9 py-3 rounded-full">
                  Purchase Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default DietPlan;
