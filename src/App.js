import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import FooterComponent from "./components/FooterComponent";
import ProgramDisplay from "./components/ProgramDisplay";
import InsightsContainer from "./components/insights/InsightsContainer";
import BusinessCreditComponent from "./BusinessCredit/BusinessCreditComponent";
import { Route, Routes } from "react-router-dom";
import Application from "./components/Application";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/program" element={<ProgramDisplay />} />
      <Route path="/insights" element={<InsightsContainer />} />
      <Route path="/Business_Credit" element={<BusinessCreditComponent />} />
      <Route path="/application" element={<Application />} />
      </Routes>
      <FooterComponent />
    </div>
  );
}

export default App;
