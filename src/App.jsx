import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Location from "./components/Locations";
import LoanOptions from "./components/LoanOptions";
import Calculator from "./components/Calculator";
import About from "./components/AboutUs";
import Offers from "./components/Offers";
import Testimonials from "./components/Testimonials";
import ApplyForm from "./components/ApplyNow";
import Footer from "./components/Footer";
import PayEmi from "./components/PayEmi";

import "./style/style.css";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* home page */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Location />
              <LoanOptions />
              <Calculator />
              <Offers />
              <Testimonials />
              <Footer />
            </>
          }
        />

        {/* about page */}
        <Route path="/about" element={<About />} />

        {/* offers page (same as Offers component) */}
        <Route path="/offers" element={<Offers />} />

        {/* apply page */}
        <Route path="/apply" element={<ApplyForm />} />
        {/*pay emi page */}
        <Route path="/pay-emi" element={<PayEmi />} />

        {/* fallback route */}
        <Route
          path="*"
          element={
            <div style={{ padding: "2rem", textAlign: "center" }}>
              <h2>404 - Page Not Found</h2>
            </div>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
