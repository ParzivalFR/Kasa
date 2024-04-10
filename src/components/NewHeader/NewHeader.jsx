import "./newheader.scss";

const NewHeader = () => {
  return (
    <header className="new-header">
      <nav role="navigation">
        <div id="menuToggle">
          <input type="checkbox" />
          <span></span>
          <span></span>
          <span></span>
          <ul id="menu">
            <a href="/home">
              <li>Accueil</li>
            </a>
            <a href="/about">
              <li>A propos</li>
            </a>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default NewHeader;
