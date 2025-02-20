import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const FooterContainer = styled.footer`
  padding: 20px;
  text-align: center;
  background: rgba(10, 10, 42, 0.95);
  color: white;
  font-family: 'Quicksand', sans-serif;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

const HeartIcon = styled(motion.span)`
  color: var(--primary-color);
  display: inline-block;
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