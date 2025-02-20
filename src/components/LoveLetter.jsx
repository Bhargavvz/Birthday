import { motion } from 'framer-motion';
import styled from '@emotion/styled';

const LetterSection = styled.section`
  min-height: 100vh;
  padding: 100px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(to bottom, rgba(10, 10, 42, 0.8), rgba(10, 10, 42, 0.95));
`;

const LetterContainer = styled(motion.div)`
  max-width: 800px;
  margin: 0 auto;
  padding: 40px;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

const Title = styled(motion.h2)`
  font-family: 'Great Vibes', cursive;
  font-size: 3.5rem;
  color: var(--primary-color);
  text-align: center;
  margin-bottom: 40px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
`;

const Content = styled(motion.div)`
  font-family: 'Dancing Script', cursive;
  font-size: 1.8rem;
  line-height: 1.8;
  color: white;
  text-align: left;
  white-space: pre-line;

  p {
    margin-bottom: 20px;
  }

  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

const Signature = styled(motion.p)`
  font-family: 'Great Vibes', cursive;
  font-size: 2.5rem;
  color: var(--primary-color);
  text-align: right;
  margin-top: 40px;
`;

const LoveLetter = () => {
  const letterContent = `
My Dearest Love,

On your special day, I want to express just how much you mean to me. Every moment with you is a treasure, every smile you share lights up my world, and every laugh we share is music to my ears.

You've brought so much joy and love into my life. Your kindness, your strength, and your beautiful soul inspire me every day. I feel blessed to have you in my life, and I cherish every moment we spend together.

Today, as we celebrate your birthday, I want you to know that you're not just my love – you're my best friend, my confidant, and my greatest blessing. You make every day brighter just by being you.

I promise to always be there for you, to support your dreams, to share your joys and sorrows, and to love you more with each passing day.

Happy Birthday, my love! May this year bring you all the happiness you deserve and more.

With all my heart,`;

  return (
    <LetterSection id="letter">
      <LetterContainer
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <Title
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          My Birthday Letter to You 💝
        </Title>
        
        <Content
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          {letterContent}
        </Content>

        <Signature
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          Your Love ❤️
        </Signature>
      </LetterContainer>
    </LetterSection>
  );
};

export default LoveLetter; 