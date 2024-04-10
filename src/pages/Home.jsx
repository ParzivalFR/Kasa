import bannerHome from "../assets/images/banner.webp";
import BannerAbout from "../components/Banner/Banner";
import Container from "../components/Container/Container";
import Top from "../components/Top/Top";

const Home = () => {
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
        />
        <Container />
      </main>
      <Top />
    </>
  );
};

export default Home;
