import About from "../components/About";
import StatsCounter from "../components/StatsCounter";
import Services from "../components/Services";
import HeaderContent from "../components/HeaderContent";
const about = () => {
  return (
    <>
      <div className="show_content about">
        <HeaderContent title = "About" prevpage = "Home" activepage = "About"/>
      </div>
      <About />
      <StatsCounter />
      <Services />
    </>
  );
};

export default about;
