import { useEffect, useState } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import NewHeader from "./components/NewHeader/NewHeader";
import About from "./pages/About";
import Home from "./pages/Home";
import Housing from "./pages/Housing";
import NotFound from "./pages/NotFound";
import "./styles/App.scss";

const App = () => {
  const [isDesktop, setDesktop] = useState(window.innerWidth > 768);
  const updateMedia = () => {
    setDesktop(window.innerWidth > 768);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  return (
    <HashRouter>
      {isDesktop ? <Header /> : <NewHeader />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/housing/:id" element={<Housing />} />
        {/* Route pour les pages inexistantes */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
};

export default App;
