// use useState to keep track which page is selected by the user
import React, { useState } from "react";
// load all the components
import Nav from "./Nav";
import Footer from "./Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";
import Home from "./pages/Home";
// load an array of projects
import projects from "../projects";

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