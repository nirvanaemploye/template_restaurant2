import React,{useState, useEffect} from "react"
import About from "./Componets/About/About"
import Banner from "./Componets/Banner/Banner"
import Footer from "./Componets/Foooter/Footer"
import Home from "./Componets/Hero/Home"
import Navbar from "./Componets/Navbar/Navbar"
import WhyChoose from "./Componets/Whychoose/WhyChoose"
import Popup from "./popup/Popup"
import AOS from "aos"
import "aos/dist/aos.css"
import Aos from "aos"

const App = () => {
  const [showPopup, setShowPopup] = useState(false);
   const HandlePopup = () => {
     setShowPopup(true);
   };

   useEffect(()=>{
    AOS.init({
      offset:100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    Aos.refresh();   
   },[]);
  
  return (
    <div className="overflow-x-hidden">
      <Navbar HandlePopup={HandlePopup}/>
      <Home/>
      <Banner/>
      <WhyChoose/>
      <About HandlePopup={HandlePopup}/>
      <Banner/>
      <Footer/>
      <Popup showPopup={showPopup} setShowPopup={setShowPopup} HandlePopup={HandlePopup}/>
    </div>
  )
}

export default App
