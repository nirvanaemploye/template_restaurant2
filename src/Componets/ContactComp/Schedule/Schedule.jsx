import { FaMapLocationDot } from "react-icons/fa6";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

const Schedule = () => {
  return (
    <>
      <div className="mx-auto w-10/12 flex flex-col justify-center space-y-8">
        <h1 className="font-semibold text-2xl md:text-4xl">Our Working Schedule:</h1>
        <div className="space-y-5 text-lg border-dashed border-b-2 pb-6 border-black/20">
          <div className="flex justify-between">
            <div>
              <p className="font-semibold">Monday to Friday:</p>
            </div>
            <div className="text-black/70">
              <p>9:00 AM to 8:00 PM</p>
            </div>
          </div>
          <div className="flex justify-between">
            <div>
              <p className="font-semibold">Saturday & Sunday:</p>
            </div>
            <div className="text-black/70">
              <p>9:00 AM to 6:00 PM</p>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="flex flex-row gap-4 md:gap-6 pb-5 border-b-2 border-dashed border-black/20">
            <IoPhonePortraitOutline className="text-3xl md:text-4xl text-primary" />
            <div>
              <p className="font-semibold">Phone Number</p>
              <p>+ 1800 254 268</p>
            </div>
          </div>
          <div className="flex flex-row gap-4 md:gap-6 pb-5 border-b-2 border-dashed border-black/20">
            <FaMapLocationDot className="text-3xl md:text-4xl text-primary" />
            <div>
              <p className="font-semibold">Address:</p>
              <p>Lorem Ipsum is simply dummy</p>
            </div>
          </div>
          <div className="flex flex-row gap-4 md:gap-6 pb-5 border-b-2 border-dashed border-black/20">
            <MdEmail className="text-3xl md:text-4xl text-primary" />
            <div>
              <p className="font-semibold">Mail:</p>
              <p>nirvanatechlabs@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Schedule;
