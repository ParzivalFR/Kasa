import bannerHome from "../assets/images/banner.webp";
import BannerAbout from "../components/Banner/Banner";
import Container from "../components/Container/Container";
import Top from "../components/Top/Top";

const Home = () => {
  document.title = "Kasa - Location d'appartement";
  return (
    <>
      <main>
        <BannerAbout
          imageUrl={bannerHome}
          title={
            <>
              Chez vous, <span>partout et ailleurs</span>
            </>
          }
          opacity={0.6}
        />
        <Container />
      </main>
      <Top />
    </>
  );
};

export default Home;
