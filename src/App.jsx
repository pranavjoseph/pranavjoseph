import { BrowserRouter, Route, Routes } from "react-router";
import ScrollToTop from "./components/ScrollToTop";
import "./App.css";
import HomePage from "./pages/Home";
import PageNotFound from "./pages/404";
import { BASE_URL } from "./utils/constants";
import ContactPage from "./pages/Contact";
import NodeJsDevPage from "./pages/ServiceLandingPage/NodeJsDev";
import FullStackDev from "./pages/ServiceLandingPage/FullStackDev";
import PhpDevPage from "./pages/ServiceLandingPage/PhpDev";
import ReactDevPage from "./pages/ServiceLandingPage/ReactDev";
import LaravelDevPage from "./pages/ServiceLandingPage/LaravelDev";
import WordPressDevPage from "./pages/ServiceLandingPage/WordPressDev";
import AboutPage from "./pages/About";

function App() {
  return (
    <BrowserRouter basename={BASE_URL}>
      <ScrollToTop />
      <Routes>
        <Route index path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />

        <Route path="/nodejs-developer" element={<NodeJsDevPage />} />
        <Route path="/fullstack-developer" element={<FullStackDev />} />
        <Route path="/php-developer" element={<PhpDevPage />} />
        <Route path="/react-developer" element={<ReactDevPage />} />
        <Route path="/laravel-developer" element={<LaravelDevPage />} />
        <Route path="/wordpress-developer" element={<WordPressDevPage />} />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
