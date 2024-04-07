import { useRouteError } from "react-router-dom";
import Error from "../components/Error/Error";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

const NotFound = () => {
  const error = useRouteError();
  console.log(error);
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
