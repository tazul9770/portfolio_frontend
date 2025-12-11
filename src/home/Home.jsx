import AboutSection from "../pages/AboutSection";
import Contact from "../pages/Contact";
import EducationSection from "../pages/EducationSection";
import Hero from "../pages/Hero";
import Skill from "../pages/Skill";

const Home = () => {
    return (
        <>
            <Hero/>
            <AboutSection/>
            <EducationSection/>
            <Skill/>
            <Contact/>
        </>
    );
};

export default Home;