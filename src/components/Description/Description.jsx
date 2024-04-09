import PropTypes from "prop-types";
import { useState } from "react";
import Collapse from "../Collapse/Collapse";
import "./description.scss";

const Description = ({ currentHousing }) => {
  console.log(currentHousing);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="description">
      <div className="top">
        <div className="titles">
          <h1>{currentHousing.title}</h1>
          <p>{currentHousing.location}</p>
          <div className="tags">
            {currentHousing.tags.map((tag, index) => (
              <button key={index}>{tag}</button>
            ))}
          </div>
        </div>
        <div className="host">
          <div className="test">
            <p>
              {currentHousing.host.name.split(" ")[0]}
              <br />
              {currentHousing.host.name.split(" ")[1]}
            </p>
            <img
              src={currentHousing.host.picture}
              alt={"Photo de " + currentHousing.host.name}
            />
          </div>
          {currentHousing.rating && (
            <div className="rating">
              {[...Array(5)].map((star, i) => {
                const ratingValue = i + 1;
                return (
                  <label key={i}>
                    <i
                      className="fas fa-star"
                      style={{
                        color:
                          ratingValue <= currentHousing.rating
                            ? "#ff6060"
                            : "#e3e3e3",
                      }}
                    ></i>
                  </label>
                );
              })}
            </div>
          )}
        </div>
      </div>
      <div className="container_collapse">
        <Collapse
          key={currentHousing.id + 1}
          title="Description"
          content={currentHousing.description}
          index={1}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        />
        <Collapse
          key={currentHousing.id + 2}
          title="Équipements"
          content={
            <ul>
              {currentHousing.equipments.map((equipment, index) => (
                <li key={index}>
                  <i
                    className="fa-solid fa-check"
                    style={{ color: "#ff6060" }}
                  ></i>
                  {"  "}
                  {equipment}
                </li>
              ))}
            </ul>
          }
          index={2}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        />
      </div>
    </section>
  );
};

Description.propTypes = {
  currentHousing: PropTypes.object.isRequired,
};

export default Description;