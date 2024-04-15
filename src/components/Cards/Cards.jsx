import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFetch } from "../../utils/useFetch";
import Loader from "../Loader/Loader";
import "./cards.scss";

const Card = () => {
  const { fetchedData, isLoading, error } = useFetch("/data.json");
  const navigate = useNavigate();
  const [numCardsToShow, setNumCardsToShow] = useState(6); // Nouvel état

  const showMoreCards = () => {
    setNumCardsToShow(numCardsToShow + 6); // Augmente le nombre de cartes à afficher
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <section className="container">
        {isLoading ? (
          <Loader />
        ) : error ? (
          navigate("/*")
        ) : (
          <>
            {fetchedData.slice(0, numCardsToShow).map((data) => (
              <figure key={data.id} className="container_card">
                {data ? (
                  <Link to={`/housing/${data.id}`} className="card">
                    <img
                      src={data.cover}
                      alt={`Photo de la location : ${data.title}`}
                      className="card__img"
                    />
                    <figcaption className="card__title">
                      {data.title}
                    </figcaption>
                  </Link>
                ) : (
                  Loader
                )}
              </figure>
            ))}
            {fetchedData.length > numCardsToShow && (
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

export default Card;
