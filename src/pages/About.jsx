import imageNeige from "../assets/images/banner_about.webp";
import Banner from "../components/Banner/Banner";
import Collapse from "../components/Collapse/Collapse";
import { useCollapse } from "../utils/useCollapse";

const About = () => {
  const { isActive, setIsActive } = useCollapse();
  document.title = "Kasa - À propos de nous";
  const dataAbout = [
    {
      title: "Fiabilité",
      content:
        "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.",
    },
    {
      title: "Respect",
      content:
        "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
    },
    {
      title: "Service",
      content:
        "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
    },
    {
      title: "Sécurité",
      content:
        "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
    },
  ];

  return (
    <>
      <main>
        <Banner
          imageUrl={imageNeige}
          opacity={0.3}
          title="none"
          isVisible={false}
        />
        <section className="section_about">
          {dataAbout.map((item, index) => (
            <Collapse
              key={`${item.title.replace(/[^\w\s]/gi, "").slice(0, 3)}${index}`}
              title={item.title}
              content=<p>{item.content}</p>
              index={item.title}
              isActive={isActive}
              setIsActive={setIsActive}
            />
          ))}
        </section>
      </main>
    </>
  );
};

export default About;
