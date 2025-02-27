import Schedule from "./Schedule";
import Helth from "./Helth";



const ScheduleHelth = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Schedule section */}
        <Schedule />
        {/* Health Section */}
        <Helth />
      </div>
    </section>
  );
};

export default ScheduleHelth;
