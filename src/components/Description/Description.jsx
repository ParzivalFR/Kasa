import PropTypes from "prop-types";
import { useCollapse } from "../../utils/useCollapse";
import Collapse from "../Collapse/Collapse";
import Loader from "../Loader/Loader";
import "./description.scss";

const Description = ({ currentHousing }) => {
  const { isActive, setIsActive } = useCollapse();
  return (
    <section className="description">
      <div className="top">
        <div className="titles">
          <h1>{currentHousing.title}</h1>
          <p>{currentHousing.location}</p>
          <div className="tags">
            {currentHousing.tags.map((tag, index) => (
              <p key={index} className="tag">
                {tag}
              </p>
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
                  <span
                    key={i}
                    className="fas fa-star"
                    style={{
                      color:
                        ratingValue <= currentHousing.rating
                          ? "#ff6060"
                          : "#e3e3e3",
                    }}
                  ></span>
                );
              })}
            </div>
          )}
        </div>
      </div>
      <div className="collapses">
        <Collapse
          key={currentHousing.id + 1}
          title="Description"
          content={
            currentHousing.description ? (
              <p>{currentHousing.description}</p>
            ) : (
              <Loader />
            )
          }
          index={currentHousing.id}
          isActive={isActive}
          setIsActive={setIsActive}
        />
        <Collapse
          key={currentHousing.id + 2}
          title="Équipements"
          content={
            <ul>
              {currentHousing.equipments ? (
                currentHousing.equipments.map((equipment, index) => (
                  <li key={index}>
                    <span
                      className="fa-solid fa-check"
                      style={{ color: "#ff6060" }}
                    ></span>
                    {"  "}
                    {equipment}
                  </li>
                ))
              ) : (
                <Loader />
              )}
            </ul>
          }
          index={currentHousing.id}
          isActive={isActive}
          setIsActive={setIsActive}
        />
      </div>
    </section>
  );
};

Description.propTypes = {
  currentHousing: PropTypes.object.isRequired,
};

export default Description;
