import AboutSection from "../pages/AboutSection";
import Contact from "../pages/Contact";
import EducationSection from "../pages/EducationSection";
import Hero from "../pages/Hero";
import Projects from "../pages/Project";
import Skill from "../pages/Skill";

const Home = () => {
    return (
        <>
            <Hero/>
            <AboutSection/>
            <EducationSection/>
            <Skill/>
            <Projects/>
            <Contact/>
        </>
    );
};

export default Home;