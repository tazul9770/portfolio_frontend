import { Routes, Route } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../home/Home";
import Contact from "../pages/Contact";

const AppRoutes = () => {
    return (
        <Routes>
           <Route element={<MainLayout/>}>
                <Route path="/" element={<Home/>}/>
                <Route path="contact" element={<Contact/>}/>
           </Route> 
        </Routes>
    );
};

export default AppRoutes;