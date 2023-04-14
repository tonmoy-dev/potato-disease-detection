import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import bgImg from "../assets/plant.jpg";

const MainLayout = ({ children }) => {
  return (
    <>
      <Navigation />
      <div
        style={{ backgroundImage: `url(${bgImg})`, backgroundSize: "cover" }}
      >
        {children}
      </div>
      <Footer />
    </>
  );
};
export default MainLayout;
