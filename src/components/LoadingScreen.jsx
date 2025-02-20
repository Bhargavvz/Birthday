import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const LoadingContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #0a0a2a;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const HeartContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`;

const LoadingText = styled(motion.div)`
  color: #ff69b4;
  font-size: 1.5rem;
  font-family: 'Dancing Script', cursive;
`;

const LoadingScreen = () => {
  return (
    <LoadingContainer>
      <HeartContainer>
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ scale: 1 }}
            animate={{ scale: [1, 1.2, 1] }}
            transition={{
              duration: 0.6,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          >
            ❤️
          </motion.div>
        ))}
      </HeartContainer>
      <LoadingText
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        Loading our love story...
      </LoadingText>
    </LoadingContainer>
  );
};

export default LoadingScreen; 