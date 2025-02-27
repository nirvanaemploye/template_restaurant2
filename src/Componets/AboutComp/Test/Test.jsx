import { useState } from "react";
import Slider from "react-slick";
import pro from "../../../assets/AboutPageImg/TestPro.png";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    img: pro, // Replace with actual image
    name: "Allen Smith",
    info: "Lorem Ipsum",
    text: "“ Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.”",
  },
  {
    id: 2,
    img: pro,
    name: "John Doe",
    info: "Software Engineer",
    text: "“ Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.”",
  },
  {
    id: 3,
    img: pro,
    name: "Jane Doe",
    info: "Designer",
    text: "“ Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.”",
  },
];

const NextArrow = ({ onClick }) => (
  <div
    className="absolute top-1/2 right-[-50px] transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg cursor-pointer hover:bg-gray-100"
    onClick={onClick}
  >
    <FaArrowRight className="text-green-500 text-xl" />
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div
    className="absolute top-1/2 left-[-50px] transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg cursor-pointer hover:bg-gray-100"
    onClick={onClick}
  >
    <FaArrowLeft className="text-green-500 text-xl" />
  </div>
);

const TestimonialSlider = () => {
  const [ setActiveSlide] = useState(0);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
    autoplay: true,
    autoplaySpeed: 3000,
    beforeChange: (current, next) => setActiveSlide(next),
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="font-montserrat py-24 text-center">
      <div className="container mx-auto">
        {/* Heading */}
        <div className="mb-10">
          <h1 className="font-semibold text-4xl">Testimonials</h1>
          <p className="text-lg text-gray-500 mt-2">What our clients say</p>
        </div>

        {/* Slider */}
        <div className="relative mx-auto ">
          <Slider {...settings}>
            {testimonials.map((item) => (
              <div key={item.id} className="p-2 items-center group container">
                <div className="relative top-10 w-20 h-20 mx-auto ">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-20 h-20 rounded-full border-4 border-white"
                  />
                </div>
                <div
                  className={
                    "py-8 px-6 pt-16 rounded-3xl bg-gray-100 transition-all duration-300 text-center group-hover:bg-primary/90 hover:text-white group"
                  }
                >
                  <p className="italic mb-4">{item.text}</p>
                  <h3 className={"font-semibold group-hover:text-yellow-400"}>
                    {item.name}
                  </h3>
                  <p className="text-sm">{item.info}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;
