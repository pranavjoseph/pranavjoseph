import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import HomePage from "./pages/Home";
import PageNotFound from "./pages/404";
import { BASE_URL } from "./utils/constants";
import ContactPage from "./pages/Contact";
import NodeJsDevPage from "./pages/ServiceLandingPage/NodeJsDev";
import FullStackDev from "./pages/ServiceLandingPage/FullStackDev";
import AboutPage from "./pages/About";

function App() {
  return (
    <BrowserRouter basename={BASE_URL}>
      <Routes>
        <Route index path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />

        <Route path="/nodejs-developer" element={<NodeJsDevPage />} />
        <Route path="/fullstack-developer" element={<FullStackDev />} />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
