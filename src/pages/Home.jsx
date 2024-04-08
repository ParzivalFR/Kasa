import bannerHome from "../assets/images/banner.webp";
import BannerAbout from "../components/Banner/Banner";
import Container from "../components/Container/Container";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Top from "../components/Top/Top";

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <BannerAbout
          imageUrl={bannerHome}
          title={
            <>
              Chez vous, <span>partout et ailleurs</span>
            </>
          }
        />
        <Container />
      </main>
      <Footer />
      <Top />
    </>
  );
};

export default Home;
