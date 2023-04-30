import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollButton from "./components/ScrollButton";

const App = () => {
  return (
    <Router>
      <Header />
      <ScrollButton />
      <Routes>
        <Route index element={<Index />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
