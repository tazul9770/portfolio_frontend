import { Routes, Route } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../home/Home";
import Contact from "../pages/Contact";
import About from "../pages/About";
import Project from "../pages/Project";
import DashboardLayout from "../layouts/DashboardLayout";
import ContactList from "../dashboard/ContactList";

const AppRoutes = () => {
    return (
        <Routes>

           <Route element={<MainLayout/>}>
                <Route path="/" element={<Home/>}/>
                <Route path="contact" element={<Contact/>}/>
                <Route path="about" element={<About/>}/>
                <Route path="projects" element={<Project/>}/>
           </Route> 
           
           <Route path="dashboard" element={<DashboardLayout/>}>
                <Route path="" element={<ContactList/>}/>
           </Route>
        </Routes>
    );
};

export default AppRoutes;