import { useNavigate, useParams } from "react-router-dom";
import Carrousel from "../components/Carrousel/Carrousel";
import Description from "../components/Description/Description";
import Loader from "../components/Loader/Loader";
import ScrollToTopButton from "../components/Top/Top";
import { useFetch } from "../utils/useFetch";

const Housing = () => {
  const { fetchedData, isLoading, error } = useFetch(`/data.json`);
  const { housingId } = useParams();
  const navigate = useNavigate();

  const currentHousing =
    fetchedData && fetchedData.find((item) => item.id === housingId);
  document.title = `Kasa - ${currentHousing && currentHousing.title}`;

  if (isLoading) {
    return <Loader />;
  } else {
    if (error || !currentHousing) {
      return navigate("/error");
    } else {
      return (
        <>
          <main>
            <Carrousel
              key={currentHousing.id}
              id={currentHousing.id}
              cover={currentHousing.cover}
              title={currentHousing.title}
              pictures={currentHousing.pictures}
            />
            <Description currentHousing={currentHousing} />
            <ScrollToTopButton />
          </main>
        </>
      );
    }
  }
};

export default Housing;
