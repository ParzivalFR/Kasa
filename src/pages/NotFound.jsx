import Header from "../components/Header/Header";
import Error from "../components/Error/Error";
import Footer from "../components/Footer/Footer";

/* eslint-disable react/no-unescaped-entities */
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
