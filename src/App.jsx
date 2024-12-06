import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Routes/Home";
import Favs from "./Routes/Favs";
import Contact from "./Routes/Contact";
import DentistDetail from "./Routes/Detail"; 

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favs" element={<Favs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/detail/:id" element={<DentistDetail />} /> 
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;


