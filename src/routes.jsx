import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageNotFound from "./pages/404Page";
import AskPage from "./pages/AskPage";
import ContactPage from "./pages/ContactPage";
import LandingPage from "./pages/LandingPage";

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/services" element={<AskPage />} />
                <Route path="*" element={<PageNotFound />} />
                <Route path="/contact" element={<ContactPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;