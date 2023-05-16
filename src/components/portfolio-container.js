import React, { useState } from 'react';
import Navigator from './navigator';
import AboutMe from './pages/about-me';
import Resume from './pages/resume';
import Portfolio from './pages/portfolio';
import Contact from './pages/contact';
import Footer from './footer';
import Header from './header'


export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('About');

  // Checks value of 'current page' and renders corresponding component
  const renderPage = () => {
    if (currentPage === 'About') {
      return <AboutMe />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Header>
        <Navigator currentPage={currentPage} handlePageChange={handlePageChange} />
      </Header>
        {renderPage()}
      <Footer />
    </div>
  );
}
