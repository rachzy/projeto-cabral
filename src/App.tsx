import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollButton from "./components/ScrollButton";
import Empresas from "./pages/Empresas";

const App = () => {
  return (
    <Router>
      <Header />
      <ScrollButton />
      <Routes>
        <Route index element={<Index />} />
        <Route path="/empresas" element={<Empresas />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
