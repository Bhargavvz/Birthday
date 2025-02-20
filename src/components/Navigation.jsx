import { motion } from 'framer-motion';
import styled from '@emotion/styled';
import { useState } from 'react';

const Nav = styled(motion.nav)`
  position: fixed;
  top: 0;
  width: 100%;
  background: rgba(10, 10, 42, 0.8);
  backdrop-filter: blur(10px);
  z-index: 1000;
  padding: 1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 0 20px;

  @media (max-width: 768px) {
    justify-content: flex-end;
  }
`;

const MenuButton = styled(motion.button)`
  display: none;
  background: rgba(255, 255, 255, 0.1);
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 8px 12px;
  border-radius: 8px;
  z-index: 1001;

  @media (max-width: 768px) {
    display: block;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
`;

const CloseButton = styled(motion.button)`
  position: fixed;
  top: 20px;
  right: 20px;
  background: rgba(255, 255, 255, 0.1);
  border: none;
  color: white;
  font-size: 1.5rem;
  padding: 8px 12px;
  border-radius: 8px;
  cursor: pointer;
  z-index: 1002;
  display: none;

  @media (max-width: 768px) {
    display: ${props => props.isOpen ? 'block' : 'none'};
  }

  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
`;

const NavList = styled(motion.ul)`
  display: flex;
  justify-content: center;
  list-style: none;
  gap: 2rem;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(10, 10, 42, 0.95);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    transform: ${props => props.isOpen ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.3s ease-in-out;
    backdrop-filter: blur(10px);
  }
`;

const NavItem = styled(motion.li)`
  a {
    color: #fff;
    text-decoration: none;
    font-family: 'Quicksand', sans-serif;
    font-size: 1.1rem;
    padding: 5px 15px;
    border-radius: 20px;
    transition: all 0.3s ease;

    &:hover {
      color: var(--primary-color);
      background: rgba(255, 105, 180, 0.1);
    }

    @media (max-width: 768px) {
      font-size: 1.3rem;
      padding: 10px 20px;
      display: block;
      width: 100%;
      text-align: center;
    }
  }
`;

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = !isMenuOpen ? 'hidden' : 'visible';
  };

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    
    if (element) {
      const navHeight = 80; // Height of your navigation bar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }

    // Close menu if open
    if (isMenuOpen) {
      setIsMenuOpen(false);
      document.body.style.overflow = 'visible';
    }
  };

  return (
    <Nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <NavContainer>
        <NavList 
          isOpen={isMenuOpen}
          initial={false}
        >
          <NavItem whileHover={{ scale: 1.1 }}>
            <a href="#welcome" onClick={(e) => handleNavClick(e, 'welcome')}>Home</a>
          </NavItem>
          <NavItem whileHover={{ scale: 1.1 }}>
            <a href="#timeline" onClick={(e) => handleNavClick(e, 'timeline')}>Our Story</a>
          </NavItem>
          <NavItem whileHover={{ scale: 1.1 }}>
            <a href="#gallery" onClick={(e) => handleNavClick(e, 'gallery')}>Gallery</a>
          </NavItem>
          <NavItem whileHover={{ scale: 1.1 }}>
            <a href="#notes" onClick={(e) => handleNavClick(e, 'notes')}>Love Notes</a>
          </NavItem>
          <NavItem whileHover={{ scale: 1.1 }}>
            <a href="#letter" onClick={(e) => handleNavClick(e, 'letter')}>Letter</a>
          </NavItem>
        </NavList>

        <MenuButton
          onClick={toggleMenu}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          ☰
        </MenuButton>

        <CloseButton
          isOpen={isMenuOpen}
          onClick={() => setIsMenuOpen(false)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          ✕
        </CloseButton>
      </NavContainer>
    </Nav>
  );
};

export default Navigation; 