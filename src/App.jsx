import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./Componets/Shared/Navbar/Navbar";
import Footer from "./Componets/Shared/Foooter/Footer";
import Popup from "./popup/Popup";
import AOS from "aos";
import "aos/dist/aos.css";

// Home Components
import Home from "./Componets/HomeComp/Hero/Home";
import Banner from "./Componets/HomeComp/Banner/Banner";
import About from "./Componets/HomeComp/About/About";
import WhyChoose from "./Componets/HomeComp/Whychoose/WhyChoose";
import Benefits from "./Componets/HomeComp/Benefits/Benefits";
import DietPlan from "./Componets/HomeComp/DietPlan/DietPlan";

// About Components
import AboutPage from "./Componets/AboutComp/AboutPage/AboutPage";
import AboutBanner from "./Componets/AboutComp/AboutBanner/AboutBanner";
import QualityFoods from "./Componets/AboutComp/QualityFoods/QualityFoods";
import Experts from "./Componets/AboutComp/Experts/Experts";
import NumbarCounter from "./Componets/AboutComp/NumbarCounter/NUmbarCounter"; // Fixed typo from "NUmbarCounter"
import Test from "./Componets/AboutComp/Test/Test";

// Contact Components
import ContactHero from "./Componets/ContactComp/Hero/ContactHero";
import ScheduleHelth from "./Componets/ContactComp/Schedule/Schedul&Helth";
import Map from "./Componets/ContactComp/Map/Map";


// Fruits Components
import FruitsHead from "./Componets/FruitsPng/FruitsHead/FruitsHead";
import FruitsGired from "./Componets/FruitsPng/FruitsGired/FruitsGired";

// Layout Component to wrap pages
const Layout = ({ children, HandlePopup }) => (
  <>
    <Navbar HandlePopup={HandlePopup} />
    {children}
    <Footer />
  </>
);

const App = () => {
  const [showPopup, setShowPopup] = useState(false);

  const HandlePopup = () => {
    setShowPopup(true);
  };

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 600,
      easing: "ease-in-sine",
      delay: 10,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="overflow-x-hidden">
      <BrowserRouter>
        <Popup
          showPopup={showPopup}
          setShowPopup={setShowPopup}
          HandlePopup={HandlePopup}
        />
        <Routes>
          {/* Default Route */}
          <Route path="/" element={<Navigate to="/home" />} />

          {/* Home Page */}
          <Route
            path="/home"
            element={
              <Layout HandlePopup={HandlePopup}>
                <Home />
                <Banner />
                <WhyChoose />
                <About HandlePopup={HandlePopup} />
                <Benefits />
                <DietPlan />
              </Layout>
            }
          />

          {/* About Page */}
          <Route
            path="/about"
            element={
              <Layout HandlePopup={HandlePopup}>
                <AboutPage />
                <AboutBanner />
                <QualityFoods />
                <Experts />
                <NumbarCounter />
                <Test />
              </Layout>
            }
          />

          {/* Contact Page */}
          <Route
            path="/contact"
            element={
              <Layout HandlePopup={HandlePopup}>
                <ContactHero />
                <ScheduleHelth />
                <Map />
              </Layout>
            }
          />

          {/* Fruits Page */}
          <Route
            path="/Fruits"
            element={
              <Layout HandlePopup={HandlePopup}>
                <FruitsHead />
                <FruitsGired />
              </Layout>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
