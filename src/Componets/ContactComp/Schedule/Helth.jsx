// import health from "../../../assets/ContactPngImg/OurHealthyFood.png";

// const healthStyle = {
//   backgroundImage: `url(${health})`,
//   backgroundRepeat: "no-repeat",
//   backgroundSize: "cover",  // Adjusted this to cover the screen
//   backgroundPosition: "center",
//   height: "100vh",  // Ensure the background covers the full viewport height
// };

const Health = () => {
  return (
    <>
      {/* <div style={healthStyle} className="relative"> */}
        <div className=" bg-primary flex flex-col container text-white py-16 xl:py-24">
          <div className="space-y-3">
            <h1 className="font-semibold text-4xl">Our Healthy Food</h1>
            <p className="font-medium text-lg">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy.
            </p>
          </div>
          <form className="space-y-6 py-5">
            <div className="gap-6 xl:w-9/12 grid md:grid-cols-2">
              <input type="text" placeholder="Your Name" className="p-3" required />
              <input type="text" placeholder="Your Number" className="p-3" required />
            </div>
            <div className="gap-6 xl:w-9/12 grid md:grid-cols-2">
              <input type="text" placeholder="Your City" className="p-3" required />
              <input type="text" placeholder="Choice Menu" className="p-3" required />
            </div>
            <div className="gap-8 flex flex-col xl:w-9/12">
              <textarea placeholder="Your Address" className="p-3" rows={4}  ></textarea>
              <button className="bg-secondary font-semibold py-4 hover:font-bold duration-200">Order Your Meal</button>
            </div>
          </form>
        </div>
      {/* </div> */}
    </>
  );
};

export default Health;
