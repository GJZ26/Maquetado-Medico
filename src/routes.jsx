import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserContext from "./context/UserContext";
import PageNotFound from "./pages/404Page";
import AskPage from "./pages/AskPage";
import ContactPage from "./pages/ContactPage";
import DashboardPage from "./pages/DashboardPage";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import { useState } from "react";
import PrivateRoute from "./context/PrivateRoutes";
import QuestionContext from "./context/QuestionContext";

function Router() {

    const [userctx, setUserctx] = useState({ logged: false, role: null })
    const [question, setQuestion] = useState([])
    return (
        <BrowserRouter>
            <QuestionContext.Provider value={{ question, setQuestion }}>
                <UserContext.Provider value={{ userctx, setUserctx }}>
                    <Routes>
                        <Route path="/" element={<LandingPage />} />
                        <Route path="/services" element={<AskPage />} />
                        <Route path="/contact" element={<ContactPage />} />
                        <Route path="/login" element={<LoginPage />} />
                        <Route element={<PrivateRoute />}>
                            <Route path="/dashboard" element={<DashboardPage />} />
                        </Route>
                        <Route path="*" element={<PageNotFound />} />
                    </Routes>
                </UserContext.Provider>
            </QuestionContext.Provider>
        </BrowserRouter>
    );
}

export default Router;