import { motion } from 'framer-motion';
import styled from '@emotion/styled';

const ReplayButtonContainer = styled.div`
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 100;
  padding: 20px;
`;

const Button = styled(motion.button)`
  background: var(--primary-color);
  color: white;
  border: none;
  padding: 15px 30px;
  border-radius: 25px;
  font-family: 'Quicksand', sans-serif;
  font-size: 1.1rem;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(255, 105, 180, 0.3);
  display: flex;
  align-items: center;
  gap: 10px;

  &:hover {
    background: var(--secondary-color);
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(255, 105, 180, 0.4);
  }
`;

const ReplayButton = ({ onClick }) => {
  return (
    <ReplayButtonContainer>
      <Button
        onClick={onClick}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Watch Birthday Message Again 🎥
      </Button>
    </ReplayButtonContainer>
  );
};

export default ReplayButton; 