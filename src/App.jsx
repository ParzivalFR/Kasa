import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import About from "./pages/About";
import Home from "./pages/Home";
import Housing from "./pages/Housing";
import NotFound from "./pages/NotFound";
import "./styles/App.scss";
import { CollapseProvider } from "./utils/useCollapse";

const App = () => {
  return (
    <>
      <Header />
      <CollapseProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/housing/:housingId" element={<Housing />} />
          {/* Route pour les pages inexistantes */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </CollapseProvider>
      <Footer />
    </>
  );
};

export default App;
