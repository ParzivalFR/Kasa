import { useNavigate, useParams } from "react-router-dom";
import Carrousel from "../components/Carrousel/Carrousel";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Loader from "../components/Loader/Loader";
import ScrollToTopButton from "../components/Top/Top";
import { useFetch } from "../utils/useFetch";

const Housing = () => {
  const { fetchedData, isLoading, error } = useFetch(`/data.json`);
  const { id } = useParams();
  const navigate = useNavigate();
  console.log(id);

  // Vérifiez si fetchedData est null avant d'accéder à ses propriétés
  const currentHousing =
    fetchedData && fetchedData.find((item) => item.id === id);

  if (isLoading) {
    return <Loader />;
  } else {
    if (error || !currentHousing) {
      return navigate("/*");
    } else {
      return (
        <>
          <Header />
          <main>
            <Carrousel
              key={currentHousing.id}
              id={currentHousing.id}
              cover={currentHousing.cover}
              title={currentHousing.title}
              pictures={currentHousing.pictures}
            />
            <ScrollToTopButton />
          </main>
          <Footer />
        </>
      );
    }
  }
};

export default Housing;
