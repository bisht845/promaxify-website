import {
  BrowserRouter,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Insight from "./pages/Insight";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ServiceDetails from "./pages/ServicesDetails";
import Partner from "./pages/Partner";
import Proposal from "./pages/Proposal";
import FaqPage from "./pages/FaqPage";
import PartnerNetwork from "./pages/PartnerNetwork";
import Legal from "./pages/Legal";

import { useEffect } from "react";


/* --------------------------------
   Scroll To Top
--------------------------------- */
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const handleClick = (event) => {

      // Find the closest link that was clicked
      const link = event.target.closest("a");

      if (!link) return;

      // Ignore external links
      if (link.target === "_blank") return;

      // Ignore links without href
      if (!link.href) return;

      const clickedUrl = new URL(link.href);
      const currentUrl = new URL(window.location.href);

      // Check if the clicked link is an internal same-page link
      const samePath =
        clickedUrl.pathname === currentUrl.pathname &&
        clickedUrl.search === currentUrl.search &&
        clickedUrl.hash === currentUrl.hash;

      if (samePath) {
        // Small delay allows the click/navigation process to finish
        setTimeout(() => {
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
        }, 0);
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [pathname]);

  return null;
}


/* --------------------------------
   App
--------------------------------- */
const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
      <Route element={<Layout />}>

          <Route index element={<Home />} />              // /

          <Route path="/services" element={<Services />} />
          <Route path="/services/:slug" element={<ServiceDetails />} />

          <Route path="/insights" element={<Insight />} />
          <Route path="/insights/:slug" element={<ServiceDetails />} />

          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/partner" element={<Partner />} />
          <Route path="/partner-network" element={<PartnerNetwork />} />

          <Route path="/proposal" element={<Proposal />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/legal" element={<Legal />} />

      </Route>

      </Routes>

    </BrowserRouter>
  );
};

export default App;