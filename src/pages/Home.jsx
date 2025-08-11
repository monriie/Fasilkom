// import { useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import TopBar from "../components/TopBar";

const Home = () => {
//   const [count, setCount] = useState(0);
  return (
    <section className="min-h-screen">
      <div className="flex justify-center items-center h-screen">
        <TopBar/>
        <Hero/>
        <Navbar/>
      </div>
    </section>
  );
};

export default Home;