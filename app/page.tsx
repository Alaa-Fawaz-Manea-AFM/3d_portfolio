import { About, Contact, Hero, Navbar, Stars, Tech, Works } from "@/components";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const HomePage = async () => (
  <>
    <div className="relative z-0 max-w-screen-max mx-auto">
      <Navbar />
      <Hero />
      <About />
      <Tech />
      <Works />
      <div className="relative z-0 ">
        <Contact />
        <Stars />
      </div>
    </div>
    <ToastContainer />
  </>
);

export default HomePage;
