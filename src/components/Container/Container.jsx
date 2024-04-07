import { useFetch } from "../../utils/useFetch";
import Card from "../Card/Card";
import Loader from "../Loader/Loader";
import "./container.scss";

const Container = () => {
  const { fetchedData, isLoading, error } = useFetch("/data.json");
  return (
    <section className="container">
      {isLoading ? (
        <Loader />
      ) : error ? (
        <p>Error</p>
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
