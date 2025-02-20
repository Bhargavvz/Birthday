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
`;

const MenuButton = styled(motion.button)`
  display: none;
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 5px;
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);

  @media (max-width: 768px) {
    display: block;
  }
`;

const NavList = styled(motion.ul)`
  display: flex;
  justify-content: center;
  list-style: none;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: rgba(10, 10, 42, 0.95);
    padding: 1rem;
    gap: 1rem;
    display: ${props => (props.isOpen ? 'flex' : 'none')};
    backdrop-filter: blur(10px);
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
  }
`;

const NavItem = styled(motion.li)`
  a {
    color: #fff;
    text-decoration: none;
    font-family: 'Quicksand', sans-serif;
    font-size: 1.1rem;
    transition: color 0.3s;
    padding: 5px 15px;
    border-radius: 20px;
    background: linear-gradient(to right, transparent 50%, rgba(255, 105, 180, 0.2) 50%);
    background-size: 200% 100%;
    background-position: left bottom;
    transition: all 0.3s ease;

    &:hover {
      color: var(--primary-color);
      background-position: right bottom;
    }
  }
`;

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <NavContainer>
        <MenuButton
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {isMenuOpen ? '✕' : '☰'}
        </MenuButton>

        <NavList isOpen={isMenuOpen}>
          <NavItem whileHover={{ scale: 1.1 }}>
            <a href="#welcome">Home</a>
          </NavItem>
          <NavItem whileHover={{ scale: 1.1 }}>
            <a href="#timeline">Our Story</a>
          </NavItem>
          <NavItem whileHover={{ scale: 1.1 }}>
            <a href="#gallery">Gallery</a>
          </NavItem>
          <NavItem whileHover={{ scale: 1.1 }}>
            <a href="#notes">Love Notes</a>
          </NavItem>
          <NavItem whileHover={{ scale: 1.1 }}>
            <a href="#letter">Letter</a>
          </NavItem>
        </NavList>
      </NavContainer>
    </Nav>
  );
};

export default Navigation; 