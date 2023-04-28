import "./App.css";
import Navbar from "./containers/Navbar";
import MainPage from "./containers/MainPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./containers/Contact";
import Produit from "./containers/Produit";
import Technologies from "./containers/Technologies";
import CookieBanner from "./components/CookieBanner"
import Apropos from "./containers/Apropos";
import PlanDActions from "./containers/PlanDAction";
import NotFound from "./containers/NotFound";
import Footer from "./containers/Footer";
import { posthog } from 'posthog-js'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/planAction" element={<PlanDActions />}></Route>
          <Route path="/produit" element={<Produit />}></Route>
          <Route path="/technologies" element={<Technologies />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/aPropos" element={<Apropos />}></Route>
          <Route path="*" element={<NotFound />} />
          <Route exact path="/" element={<MainPage />}></Route>
        </Routes>
        {posthog.has_opted_in_capturing() || posthog.has_opted_out_capturing() ? null : <CookieBanner/>}
        <Footer />
      </Router>
    </div>
  );
}

export default App;
