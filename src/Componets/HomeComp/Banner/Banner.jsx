import PrimaryButton from "../../Shared/PrimaryButton";
import fruitSalad from "../../../assets/HomePngImg/png/fruitSalad.png";
import tomato from "../../../assets/HomePngImg/png/tomato.png";
import strawberry from "../../../assets/HomePngImg/png/strawberry.png";
import lemon from "../../../assets/HomePngImg/png/lemon.png";
import kiwi from "../../../assets/HomePngImg/png/kiwi.png";

const Banner = () => {
  return (
    <div className="container py-32 relative overflow-hidden">
      <div className="relative z-20 text-center">
        <h1
          data-aos="fade-up"
          data-aos-delay="300"
          className="py-8 tracking-wider text-2xl font-semibold text-dark"
        >
          Taste the Healthy Difference
        </h1>

        {/* Text Sections */}
        <div data-aos="fade-up" data-aos-delay="500" className="space-y-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-10">
            <div className="text-left leading-8">
              <p>
                We know that <span className="text-primary">time</span> is the
                greatest value in the modern world. Our healthy meal plan
                delivery service Good Food in Miami is the answer for those who
                want to eat healthily, saving time for buying food and preparing
                delicious, healthy meals.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-10">
            <div className="hidden sm:block"></div>
            <div className="text-left sm:text-left leading-8">
              <p>
                We know that <span className="text-primary">time</span> is the
                greatest value in the modern world. Our healthy meal plan
                delivery service Good Food in Miami is the answer for those who
                want to eat healthily, saving time for buying food and preparing
                delicious, healthy meals.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-10">
            <div className="text-left leading-8">
              <p>
                We know that <span className="text-primary">time</span> is the
                greatest value in the modern world. Our healthy meal plan
                delivery service Good Food in Miami is the answer for those who
                want to eat healthily, saving time for buying food and preparing
                delicious, healthy meals.
              </p>
            </div>
          </div>
        </div>

        {/* Button Section */}
        <div
          data-aos="fade"
          data-aos-delay="500"
          data-aos-offset="0"
          className="flex justify-center mt-10 sm:mt-14"
        >
          <PrimaryButton />
        </div>
      </div>

      {/* Background Fruit Images */}
      <img
        data-aos="fade-right"
        src={fruitSalad}
        alt="Leaf"
        className="absolute top-5 -left-16 sm:bottom-0 sm:left-0 opacity-40 sm:opacity-100 max-w-[160px]"
      />

      <img
        data-aos="fade-right"
        src={kiwi}
        alt="Tomato"
        className="absolute -bottom-10 -left-16 sm:bottom-0 sm:left-0 opacity-40 sm:opacity-100 max-w-[250px]"
      />

      <img
        data-aos="fade-left"
        src={lemon}
        alt="Lemon"
        className="absolute top-10 -right-16 sm:right-20 opacity-0 sm:opacity-00 max-w-[150px]"
      />

      <img
        data-aos="fade-left"
        src={tomato}
        alt="Apple"
        className="hidden sm:block absolute bottom-0 right-0 max-w-[200px]"
      />

      <img
        data-aos="fade"
        src={strawberry}
        alt="Kiwi"
        className="absolute hidden sm:block top-1/3 pt-10 -translate-y-1/3 left-1/3 -translate-x-1/3 opacity-40 sm:opacity-100 max-w-[180px]"
      />
    </div>
  );
};

export default Banner;
