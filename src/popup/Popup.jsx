import { FaFacebook, FaGoogle } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";
import SaideImg from "../assets/PopImg.png";

const bgStyle = {
  backgroundImage: `url(${SaideImg})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover", // Consider switching to 'contain' for smaller screens
  backgroundPosition: "center",
  width: "100%",
  height: "100%",
};

const Popup = ({ showPopup, setShowPopup }) => {
  return (
    <>
      {showPopup && (
        <div>
          <div className="h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm font-montserrat">
            <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-md bg-white rounded-md duration-200 lg:w-[780px] w-[300px] grid grid-cols-1 lg:grid-cols-2">
              <div
                style={bgStyle}
                className="relative ps-16 text-5xl font-semibold text-black hidden lg:block"
              >
                <p className="absolute top-1/3 border-2 my-auto">Welcome Back!</p>
              </div>

              {/* Form DiV  */}
              <div className="lg:p-8 p-6">
                {/* Header Section */}
                <div className="flex items-center justify-between">
                  <div>
                    <h1 className="text-3xl font-bold text-dark">Login</h1>
                  </div>
                  <div>
                    <IoCloseOutline
                      className="text-4xl cursor-pointer"
                      onClick={() => setShowPopup(false)}
                    />
                  </div>
                </div>

                {/* Login Form */}
                <div className="mt-6">
                  <div>
                    <label htmlFor="email" className="text-gray-400 ">
                      User Name
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="Enter Email"
                      className="w-full border border-gray-300 dark:border-gray-500 px-2 py-1 my-2"
                      aria-label="Email Address"
                    />
                  </div>
                  <div>
                    <label htmlFor="Password" className="text-gray-400">
                      Password
                    </label>
                    <input
                      id="Password"
                      type="password"
                      placeholder="Enter Password"
                      className="w-full border border-gray-300 dark:border-gray-500 px-2 py-1 my-2"
                      aria-label="Password"
                    />
                  </div>
                </div>

                {/* Login Button */}
                <div className="mt-6">
                  <button
                    className="bg-primary text-white w-full p-2 text-xl font-semibold"
                    onClick={() => setShowPopup(false)}
                  >
                    Login
                  </button>
                </div>

                {/* Social Login */}
                <div className="mt-2 space-y-2">
                  <p className="text-center">Or continue with</p>
                  <div className="flex items-center justify-center gap-4 mt-2">
                    <FaFacebook className="text-3xl hover:text-blue-600 duration-200" />
                    <FaGoogle className="text-3xl hover:text-primary duration-200" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
