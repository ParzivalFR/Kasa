import Error from "../components/Error/Error";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

const NotFound = () => {
  return (
    <>
      <Header />
      <main>
        <Error />
      </main>
      <Footer />
    </>
  );
};

export default NotFound;
