import {
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
} from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Housing from "./pages/Housing";
import NotFound from "./pages/NotFound";
import "./styles/App.scss";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/housing",
    element: <Housing />,
    children: [
      {
        path: ":id",
        element: <Housing />,
      },
    ],
  },
]);

const App = () => {
  return (
    <RouterProvider router={router}>
      <Routes>
        {/* Route pour la page d'accueil */}
        <Route path="/" element={<Home />} />
        {/* Route pour la page "À propos" */}
        <Route path="/about" element={<About />} />
        {/* Route pour la page du logement et ses enfants */}
        <Route path="/housing/*" element={<Housing />} />
        {/* Route pour les chemins non valides, renvoie vers la page NotFound */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </RouterProvider>
  );
};

export default App;
