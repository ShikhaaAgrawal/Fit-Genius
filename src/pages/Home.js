import React from "react";
import MainContent from "../components/mainc";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

const Home = () => {
  return (
    <div>
        <Navbar />
      <MainContent />
      <Footer />
    </div>
  );
};

export default Home;
