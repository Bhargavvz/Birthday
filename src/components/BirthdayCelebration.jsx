import { motion } from 'framer-motion';
import styled from '@emotion/styled';
import Confetti from 'react-confetti';
import { useState, useEffect } from 'react';

const CelebrationContainer = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.9);
  z-index: 1000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

const CloseButton = styled(motion.button)`
  position: absolute;
  top: 20px;
  right: 20px;
  background: rgba(255, 255, 255, 0.2);
  border: none;
  color: white;
  padding: 10px 20px;
  border-radius: 20px;
  cursor: pointer;
  font-family: 'Quicksand', sans-serif;
  backdrop-filter: blur(5px);
  z-index: 1001;
  
  &:hover {
    background: rgba(255, 255, 255, 0.3);
  }
`;

const BirthdayCelebration = ({ onClose }) => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleClose = (e) => {
    e.stopPropagation();
    onClose();
  };

  return (
    <CelebrationContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      onClick={handleClose}
    >
      <Confetti
        width={windowSize.width}
        height={windowSize.height}
        numberOfPieces={200}
        recycle={false}
        colors={['#ff69b4', '#ff1493', '#ff4d6d', '#ffb6c1', '#gold']}
      />
      
      <CloseButton
        onClick={handleClose}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        Close ✕
      </CloseButton>
    </CelebrationContainer>
  );
};

export default BirthdayCelebration; 