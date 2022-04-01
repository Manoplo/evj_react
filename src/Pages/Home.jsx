import Announcement from "../components/Announcement";
import NavBar from "../components/NavBar";
import Slider from "../components/Slider";
import Categories from "../components/Categories";
import Products from "../components/Products";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";
import FullPageSlider from "../components/FullPageSlider";
const Home = () => {
  return (
    <>
      <NavBar />
      {/* <Slider /> */}
      <FullPageSlider />
      <h1>CATEGORÍAS</h1>
      <Categories />
      <h1>NOVEDADES</h1>
      <Products />
      <NewsLetter />
      <Footer />
    </>
  );
};

export default Home;
