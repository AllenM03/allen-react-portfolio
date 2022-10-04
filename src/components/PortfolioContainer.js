// use useState to keep track which page is selected by the user
import React, { useState } from "react";
//load all the components
import Nav from "./Nav.js";
import Footer from "./Footer.js";
import About from "./pages/About.js";
import Contact from "./pages/Contact.js";
import Portfolio from "./pages/Portfolio.js";
import Resume from "./pages/Resume.js";
import Home from "./pages/Home.js";
// load an array of projects
import projects from "../projects.js";    ////////////    ADD JS TO THE END OF ALL PAGES FILES   ///////////

export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState("Home");
    const renderPage = () => {
        // based on the page clicked, load the appropriate component
        switch (currentPage) {
        case "About":
            return <About />;
        case "Contact":
            return <Contact />;
        case "Portfolio":
            return <Portfolio projects={projects} />;
        case "Resume":
            return <Resume />;
        default:
            
            return <Home />;
        }
    };

    const handlePageChange = (page) => setCurrentPage(page);
    return (
        <div className="cover-container d-flex w-100 h-100 flex-column">
        {/* show the Nav and Footer components regardless of the "main" component shown */}
        <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
        {renderPage()}
        <Footer />
        </div>
    );
}