import { useRoutes } from "react-router-dom";
import Navbar from "./Components/Navbar.jsx";
import publicRoutes from "./Routes/Public.jsx";
import Footer from "./Components/Footer.jsx";
import privateRoutes from "./Routes/PrivateRoutes.jsx";
import ScrollToTop from "./Components/ScrollToTop.jsx";

export default function App() {
  const routing = useRoutes([...publicRoutes, ...privateRoutes]);

  return (
    <div className="min-h-screen bg-gray-100">
      <ScrollToTop/>
      <Navbar />
      {routing}
      <Footer />
    </div>
  );
}

