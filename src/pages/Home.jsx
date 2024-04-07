import Banner from "../components/Banner/Banner";
import Container from "../components/Container/Container";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Top from "../components/Top/Top";

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <Banner />
        <Container />
      </main>
      <Footer />
      <Top />
    </>
  );
};

export default Home;
