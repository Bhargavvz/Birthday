import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const HeartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
  overflow: hidden;
`;

const Heart = styled(motion.div)`
  position: absolute;
  font-size: ${props => props.size}px;
  color: ${props => props.color};
  opacity: 0.6;
`;

const FloatingHearts = () => {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    const colors = ['#ff69b4', '#ff1493', '#ff6b81', '#ff4d6d'];
    const sizes = [20, 25, 30, 35, 40];
    const createHeart = () => {
      const heart = {
        id: Date.now(),
        x: Math.random() * window.innerWidth,
        size: sizes[Math.floor(Math.random() * sizes.length)],
        color: colors[Math.floor(Math.random() * colors.length)],
      };
      setHearts(prev => [...prev, heart]);
      setTimeout(() => {
        setHearts(prev => prev.filter(h => h.id !== heart.id));
      }, 6000);
    };

    const interval = setInterval(createHeart, 300);
    return () => clearInterval(interval);
  }, []);

  return (
    <HeartContainer>
      {hearts.map(heart => (
        <Heart
          key={heart.id}
          size={heart.size}
          color={heart.color}
          initial={{ y: window.innerHeight, x: heart.x, opacity: 0.8 }}
          animate={{
            y: -100,
            x: heart.x + (Math.random() - 0.5) * 200,
            opacity: 0,
          }}
          transition={{
            duration: 6,
            ease: "easeOut",
          }}
        >
          ❤️
        </Heart>
      ))}
    </HeartContainer>
  );
};

export default FloatingHearts; 