import React from "react";
import Banner from "../common/Banner";

import Navbar from "../common/Navbar";
import Faq from "../pages/Faq/Faq";
import OurPartnerShip from "../pages/OurPartnerShip";
import TopSelling from "../pages/TopSelling";
import Blogs from "./blog/Blogs";
import Category from "./Category/Category";
import Alldiaseas from "./diaseas/Alldiaseas";
import Stat from "./stat/Stat";
import Footer from "../common/Footer/Footer";
import TopBlogs from "./blog/TopBlogs";

const HomePage = () => {
  return (
    <div>
      {/* <Banner /> */}
      {/* <Category /> */}
      {/* <TopSelling /> */}
      <Blogs />
      <Alldiaseas />
      <Stat />
      {/* <OurPartnerShip /> */}
      <TopBlogs />
      <Faq />
      <Footer />
    </div>
  );
};

export default HomePage;
