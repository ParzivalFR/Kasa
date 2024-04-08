import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useFetch } from "../../utils/useFetch";
import Card from "../Card/Card";
import Loader from "../Loader/Loader";
import "./container.scss";

const Container = () => {
  const { fetchedData, isLoading, error } = useFetch("/data.json");
  const navigate = useNavigate();

  useEffect(() => {
    sessionStorage.setItem("data", JSON.stringify(fetchedData));
    window.scrollTo(0, 0);
  }, [fetchedData]);
  return (
    <section className="container">
      {isLoading ? (
        <Loader />
      ) : error ? (
        navigate("/*")
      ) : (
        fetchedData.map((data) => (
          <Card
            key={data.id}
            id={data.id}
            cover={data.cover}
            title={data.title}
            loader={<Loader />}
          />
        ))
      )}
    </section>
  );
};

export default Container;
