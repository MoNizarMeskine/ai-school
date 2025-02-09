import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./parts/Navbar";
import Contactbar from "./parts/Contactbar";
import Home from "./pages/Home";
import About from "./pages/About";
import SpecialPage from "./pages/SpecialPage"; // Import the new page
import Classes from "./pages/Classes";

const yeye = true; // Define the boolean value

const App = () => {
  return (
    <main>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/classes" element={<Classes />} />
          {yeye && <Route path="/special" element={<SpecialPage />} />} {/* Conditionally render the route */}
        </Routes>
        <Contactbar />
      </Router>
    </main>
  );
};

export default App;