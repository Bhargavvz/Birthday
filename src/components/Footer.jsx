import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const FooterContainer = styled.footer`
  padding: 20px;
  text-align: center;
  background: rgba(10, 10, 42, 0.95);
  color: white;
  font-family: 'Quicksand', sans-serif;
  border-top: 1px solid rgba(255, 255, 255, 0.1);

  @media (max-width: 768px) {
    padding: 15px;
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    padding: 10px;
    font-size: 0.8rem;
  }
`;

const HeartIcon = styled(motion.span)`
  color: var(--primary-color);
  display: inline-block;
  font-size: 1.2em;

  @media (max-width: 768px) {
    font-size: 1.1em;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      Made with{' '}
      <HeartIcon
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        ❤️
      </HeartIcon>{' '}
      by Your Love
    </FooterContainer>
  );
};

export default Footer; 