import Banner from "./Banner";
import Featured from "./Featured";
import Footer from "./Footer";
import NavBar from "./NavBar";
import Partner from "./Partner";
import Testimonials from "./Testimonials";
import WorkFlow from "./WorkFlow";

const Main = () => {
  return (
    <div>
      <NavBar />
      <Banner />
      <Featured />
      <WorkFlow />
      <Testimonials />
      <Partner />
      <Footer />
    </div>
  );
};

export default Main;
