import HomePage from "./components/HomePage";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useNavigate,
} from "react-router-dom";
import AddProduct from "./components/dashboard/adminDashboard/products/AddProduct";
import Navbar from "./common/Navbar";
import ManageProducts from "./components/dashboard/adminDashboard/products/ManageProducts";
import ProductsGrid from "./components/Category/ProductsGrid";
import ProductDetails from "./components/Category/ProductDetails";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import React, { useState } from "react";
import AddBlogs from "./components/dashboard/adminDashboard/blogs/AddBlogs";
import BlogDetails from "./components/blog/BlogDetails";
import Blogs from "./components/blog/Blogs";
import SignIn from "./auth/SignIn";
import Register from "./auth/Register";
import AuthProvider from "./contexts/AuthProvider";
import Admin from "./components/dashboard/Dashboard";
import useAuth from "./hooks/useAuth";
import NotFound from "./components/Form/NotFound";
import Properties from "./components/allProduct/Properties";
import Allproduct from "./components/allProduct/Allproduct";
import About from "./pages/About";
import { MdOutlineTopic } from "react-icons/md";
import BmiCalclutor from "./components/tools/BmiCalclutor";
import CalorieCalculator from "./components/tools/CalorieCalculator";
import StressManagementTools from "./components/tools/stressManagement";
import TermsAndCondition from "./common/Footer/TermsAndCondition";
import Disclamer from "./common/Footer/Disclaimer";
import Alldiaseas from "./components/diaseas/Alldiaseas";
import Stat from "./components/stat/Stat";

function App() {
  const [changeHeader, setChangeHeader] = useState(false);
  const onChangeHeader = () => {
    if (window.scrollY >= 10) {
      setChangeHeader(true);
    } else {
      setChangeHeader(false);
    }
  };

  const PrivateRoute = ({ children }) => {
    const user = useAuth(); // isauth() returns true or false based on localStorage

    return user ? children : <Navigate to="/sign-in" />;
  };
  window.addEventListener("scroll", onChangeHeader);
  return (
    <>
      <Router>
        {" "}
        <AuthProvider>
          <Navbar />

          {/* <FloatingWhatsApp
            phoneNumber="+8801968003566"
            accountName="Abdullah Al Mamun"
            avatar="https://res.cloudinary.com/djejkfzz6/image/upload/v1674560417/h6qehpsowyg4p6dpwyqr.jpg"
          /> */}
          {changeHeader && (
            <button
              onClick={() => window.scrollTo(0, 0)}
              type="button"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
              class="inline-block p-3 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out  bottom-5 left-5 fixed"
              id="btn-back-to-top"
            >
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                class="w-4 h-4"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  fill="currentColor"
                  d="M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"
                ></path>
              </svg>
            </button>
          )}

          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/sign-in" element={<SignIn />} />
            {/* <Route path="/sign-up" element={<Register />} /> */}
            <Route path="/about" element={<About />} />

            <Route path="*" element={<NotFound />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/dashboard/*" element={<Admin />} />
            <Route path="/manage-properties" element={<AddProduct />} />
            <Route path="/manage-blogs" element={<AddBlogs />} />
            <Route exact path="/search/:id" element={<Allproduct />} />
            <Route exact path="/bmi-tools" element={<BmiCalclutor />} />
            <Route exact path="/health-tools" element={<Stat />} />
            <Route
              exact
              path="/calorie-calculator"
              element={<CalorieCalculator />}
            />
            <Route
              exact
              path="/stress-management-tools"
              element={<StressManagementTools />}
            />
            <Route
              exact
              path="/terms-and-condition"
              element={<TermsAndCondition />}
            />
            <Route exact path="/disclaimer" element={<Disclamer />} />
            <Route exact path="/all-disease" element={<Alldiaseas />} />
            <Route exact path="/blogs/:id" element={<BlogDetails />} />
          </Routes>
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;
