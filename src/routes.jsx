import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageNotFound from "./pages/404Page";
import LandingPage from "./pages/LandingPage";

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="*" element={<PageNotFound/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default Router;