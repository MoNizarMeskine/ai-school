import { Route, BrowserRouter as Router, Routes, useLocation } from "react-router-dom";
import Navbar from "./parts/Navbar";
import Contactbar from "./parts/Contactbar";
import Home from "./pages/Home";
import About from "./pages/About";
import SpecialPage from "./pages/SpecialPage"; // Import the new page
import Classes from "./pages/Classes";
import Signup from "./pages/Signup";
import Chatbot from './pages/Chatbot';


const App = () => {
  return (
    <main>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/classes" element={<Classes />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/special" element={<SpecialPage />} />
            <Route path="/chatbot" element={<Chatbot />} />

          </Routes>
        </Layout>
      </Router>
    </main>
  );
};

const Layout = ({ children }) => {
  const location = useLocation(); 

  const isExcludedPage = ["/special", "/chatbot"].includes(location.pathname); 

  return (
    <>
      {!isExcludedPage && <Navbar />}
      {children}
      {!isExcludedPage && <Contactbar />}
    </>
  );
};

export default App;