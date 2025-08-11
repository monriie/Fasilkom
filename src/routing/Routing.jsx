import { Route, Routes } from "react-router";
// import { useContext } from "react";
// import { ThemeContext } from "@/context/ThemeContext";
import Home from "@/pages/Home";

const Routing = () => {
//   const { theme } = useContext(ThemeContext);
  return (
    <section className={` bg-background text-foreground`}>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </section>
  );
};

export default Routing;