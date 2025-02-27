import CountUp from "react-countup";

const counterData = [
  { id: 1, end: 10, label: "Year of Foundation" },
  { id: 2, end: 200, suffix: "+", label: "Happy Clients" },
  { id: 3, end: 10, label: "Skilled Team Members" },
  { id: 4, end: 100, label: "Monthly Orders" },
];

const NumberCounter = () => {
  return (
    <section className="bg-primary text-white font-montserrat py-10">
      <div className="container grid grid-cols-2 md:grid-cols-4 gap-8">
        {counterData.map((item) => (
          <div
            key={item.id}
            className="flex flex-col md:flex-row items-center justify-center gap-3 text-center md:text-left"
          >
            <p className="text-5xl font-bold">
              <CountUp
                start={0}
                end={item.end}
                suffix={item.suffix || ""}
                duration={2}
                enableScrollSpy={true}
                scrollSpyOnce={true}
              />
            </p>
            <p className="text-lg md:text-xl">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NumberCounter;
