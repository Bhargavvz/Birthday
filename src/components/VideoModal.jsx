import { motion } from 'framer-motion';
import styled from '@emotion/styled';

const ModalOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const VideoContainer = styled.div`
  width: 100%;
  max-width: 800px;
  aspect-ratio: 16/9;
  position: relative;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 0 30px rgba(255, 105, 180, 0.5);

  @media (max-width: 768px) {
    border-radius: 10px;
  }
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
  
  @media (max-width: 768px) {
    top: 10px;
    right: 10px;
    padding: 8px 15px;
    font-size: 0.9rem;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.3);
  }
`;

const VideoModal = ({ onClose }) => {
  return (
    <ModalOverlay
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <CloseButton
        onClick={onClose}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        Close ✕
      </CloseButton>
      <VideoContainer>
        <video
          autoPlay
          controls
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        >
          <source src="/assets/videos/moment1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </VideoContainer>
    </ModalOverlay>
  );
};

export default VideoModal; 