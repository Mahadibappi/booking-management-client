import Banner from "./Banner";
import Featured from "./Featured";
import NavBar from "./NavBar";
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
    </div>
  );
};

export default Main;
