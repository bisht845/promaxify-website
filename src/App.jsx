import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Services from "./pages/Services"; 
import Insight from "./pages/Insight"; 
import About from "./pages/About"; 
import Contact from "./pages/Contact"; 
import ServiceDetails from "./pages/ServicesDetails";
import { useEffect } from "react";
import Partner from "./pages/Partner";
import Proposal from "./pages/Proposal";
import FaqPage from "./pages/FaqPage";
import PartnerNetwork from "./pages/PartnerNetwork";
import Legal from "./pages/Legal";
function ScrollToTop(){
  const {pathname} = useLocation();

  useEffect( () => {
    window.scrollTo(0,0);
  },[pathname])

  return null;
}

const App = () => {
  return (
    <>
      <BrowserRouter basename="/promaxify-website">
      <ScrollToTop/>
      <Routes>
        <Route  element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:slug" element={<ServiceDetails />} />
        <Route path= "/insights" element={<Insight />} />
        <Route path="/insights/:slug" element={<ServiceDetails />}/>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/partner" element={<Partner />} />
        <Route path="/partner-network" element={<PartnerNetwork/>} />
        <Route path="/proposal" element={<Proposal />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/legal" element={<Legal />} />
        </Route>
      </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;