import { motion } from 'framer-motion';
import styled from '@emotion/styled';

const Button = styled(motion.button)`
  position: fixed;
  bottom: 80px;
  right: 20px;
  background: ${props => props.isEnabled ? 'var(--primary-color)' : 'rgba(255, 105, 180, 0.5)'};
  color: white;
  border: none;
  padding: 15px 25px;
  border-radius: 25px;
  font-family: 'Quicksand', sans-serif;
  font-size: 1.1rem;
  cursor: ${props => props.isEnabled ? 'pointer' : 'not-allowed'};
  box-shadow: 0 4px 15px rgba(255, 105, 180, 0.3);
  display: flex;
  align-items: center;
  gap: 10px;
  z-index: 100;
  background-image: url('/assets/photos/thumbnail.jpg');

  @media (max-width: 768px) {
    bottom: 20px;
    right: 50%;
    transform: translateX(50%);
    padding: 12px 20px;
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    padding: 10px 15px;
    font-size: 0.9rem;
  }

  &:hover {
    background: ${props => props.isEnabled ? 'var(--secondary-color)' : 'rgba(255, 105, 180, 0.5)'};
  }
`;

const VideoButton = ({ onClick, isEnabled }) => {
  const handleClick = () => {
    if (!isEnabled) {
      const now = new Date();
      const targetDate = new Date('2025-02-24T00:00:00+05:30');
      const difference = targetDate - now;
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));

      alert(`Please wait until February 24th, 2025 to view the birthday video! 🎂\n\nTime remaining: ${days} days, ${hours} hours, and ${minutes} minutes`);
      return;
    }
    onClick();
  };

  return (
    <Button
      onClick={handleClick}
      isEnabled={isEnabled}
      whileHover={isEnabled ? { scale: 1.05 } : {}}
      whileTap={isEnabled ? { scale: 0.95 } : {}}
    >
      🎥 Birthday Video
    </Button>
  );
};

export default VideoButton; 