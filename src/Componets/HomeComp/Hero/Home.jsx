import HeroImg from "../../../assets/HomePngImg/hero1.png";
import PrimaryButton from "../../Shared/PrimaryButton";
import Herobg from "../../../assets/HomePngImg/herobg.png";

const Home = () => {
  return (
    <section
      className="-z-10 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${Herobg})` }}
    >
      <div className="container mx-auto py-16 sm:py-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 place-items-center min-h-[600px]">
          {/* Text Section */}
          <div className="space-y-7 text-dark order-2 sm:order-1">
            <h1
              data-aos="fade-up"
              className="text-5xl"
            >
              Fresh & Healthy Meal Plan{" "}
              <span className="text-secondary font-arizonia text-7xl">
                Delivery
              </span>{" "}
              in Miami
            </h1>
            <p
              data-aos="fade-up"
              data-aos-delay="400"
              className="lg:pr-64"
            >
              Delicious Meals Delivered to Your Door From $132.95 per week
            </p>
            <div data-aos="fade-up" data-aos-delay="800">
              <PrimaryButton />
            </div>
          </div>

          {/* Image Section */}
          <div
            data-aos="zoom-in"
            data-aos-delay="600"
            className="relative z-10 order-1 sm:order-2 lg:p-[42px] p-0"
          >
            <img
              src={HeroImg}
              alt="Healthy Meal Delivery"
              className="w-full sm:scale-125 sm:translate-y-16 max-w-[400px] sm:max-w-none"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
