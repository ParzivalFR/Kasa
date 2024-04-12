import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFetch } from "../../utils/useFetch";
import Card from "../Card/Card";
import Loader from "../Loader/Loader";
import "./container.scss";

const Container = () => {
  const { fetchedData, isLoading, error } = useFetch("/data.json");
  const navigate = useNavigate();
  const [numCardsToShow, setNumCardsToShow] = useState(6); // Nouvel état

  const showMoreCards = () => {
    setNumCardsToShow(numCardsToShow + 6); // Augmente le nombre de cartes à afficher
  };

  useEffect(() => {
    sessionStorage.setItem("data", JSON.stringify(fetchedData));
    window.scrollTo(0, 0);
  }, [fetchedData]);

  return (
    <>
      <section className="container">
        {isLoading ? (
          <Loader />
        ) : error ? (
          navigate("/*")
        ) : (
          <>
            {fetchedData.slice(0, numCardsToShow).map(
              (
                data // Affiche seulement les cartes jusqu'à numCardsToShow
              ) => (
                <Card
                  key={data.id}
                  id={data.id}
                  cover={data.cover}
                  title={data.title}
                  loader={<Loader />}
                />
              )
            )}
            {fetchedData.length > numCardsToShow && ( // Affiche le bouton seulement s'il y a plus de cartes à montrer
              <div className="container_button">
                <button
                  value="Afficher plus de contenu"
                  onClick={showMoreCards}
                >
                  Afficher plus
                </button>
              </div>
            )}
          </>
        )}
      </section>
    </>
  );
};

export default Container;
