import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollButton from "./components/ScrollButton";

import Index from "./pages/Index";
import Empresas from "./pages/Empresas";

const App = () => {
  return (
    <Router basename={window.location.pathname}>
      <Header />
      <ScrollButton />
      <Routes>
        <Route index element={<Index />} />
        <Route path="/empresas/:companyId" element={<Empresas />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
