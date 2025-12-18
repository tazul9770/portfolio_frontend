import AboutSection from "../pages/AboutSection";
import Contact from "../pages/Contact";
import DeveloperDNA from "../pages/DeveloperDNA";
import EducationSection from "../pages/EducationSection";
import Hero from "../pages/Hero";
import HowBuild from "../pages/HowBuild";
import Projects from "../pages/Project";
import Skill from "../pages/Skill";

const Home = () => {
    return (
        <>
            <Hero/>
            <AboutSection/>
            <DeveloperDNA/>
            <HowBuild/>
            <EducationSection/>
            <Skill/>
            <Projects/>
            <Contact/>
        </>
    );
};

export default Home;