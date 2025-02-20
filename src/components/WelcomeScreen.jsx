import { motion } from 'framer-motion';
import styled from '@emotion/styled';

const WelcomeSection = styled.section`
  height: 100vh;
  background-image: url('/src/assets/photos/main-bg.jpg');
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 20px;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(10, 10, 42, 0.7);
    backdrop-filter: blur(3px);
    z-index: 1;
  }
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 2;
  max-width: 800px;
  margin: 0 auto;
`;

const MainTitle = styled(motion.h1)`
  font-family: 'Great Vibes', cursive;
  font-size: 4.5rem;
  color: #ff69b4;
  margin-bottom: 1.5rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const Subtitle = styled(motion.p)`
  font-family: 'Quicksand', sans-serif;
  font-size: 1.8rem;
  color: white;
  margin-bottom: 2rem;
  font-weight: 300;
  
  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

const LoveMessage = styled(motion.div)`
  font-family: 'Dancing Script', cursive;
  font-size: 2rem;
  color: #ff1493;
  margin: 2rem 0;
  line-height: 1.6;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    font-size: 1.6rem;
  }
`;

const ScrollIndicator = styled(motion.div)`
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 2rem;
  color: white;
  z-index: 2;
`;

const WelcomeScreen = () => {
  return (
    <WelcomeSection id="welcome">
      <ContentWrapper>
        <MainTitle
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Happy Birthday,Gunnamma 💝
        </MainTitle>

        <Subtitle
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          To the most beautiful soul in my universe ✨
        </Subtitle>

        <LoveMessage
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          Every moment with you is a gift, every smile you share lights up my world.
          You make my heart dance with joy, and today, I celebrate the amazing person you are.
          Thank you for being the most precious part of my life. 
          I love you more than all the stars in the sky! 🌟
        </LoveMessage>
      </ContentWrapper>

      <ScrollIndicator
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 10 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      >
        ↓
      </ScrollIndicator>
    </WelcomeSection>
  );
};

export default WelcomeScreen; 