import { motion } from 'framer-motion';
import styled from '@emotion/styled';
import { useEffect, useState } from 'react';

const EffectsContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 10;
`;

const Sparkle = styled(motion.div)`
  position: absolute;
  width: 4px;
  height: 4px;
  background: white;
  border-radius: 50%;
`;

const FloatingEmoji = styled(motion.div)`
  position: absolute;
  font-size: 2rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const RomanticEffects = () => {
  const [sparkles, setSparkles] = useState([]);
  const [emojis, setEmojis] = useState([]);

  // Create sparkles effect
  useEffect(() => {
    const createSparkle = () => {
      const sparkle = {
        id: Date.now(),
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
      };
      setSparkles(prev => [...prev, sparkle]);
      setTimeout(() => {
        setSparkles(prev => prev.filter(s => s.id !== sparkle.id));
      }, 1500);
    };

    const interval = setInterval(createSparkle, 500);
    return () => clearInterval(interval);
  }, []);

  // Create floating love emojis
  useEffect(() => {
    const loveEmojis = ['💝', '💖', '💗', '💓', '💕', '💋', '💜'];
    const createEmoji = () => {
      const emoji = {
        id: Date.now(),
        icon: loveEmojis[Math.floor(Math.random() * loveEmojis.length)],
        x: Math.random() * window.innerWidth,
      };
      setEmojis(prev => [...prev, emoji]);
      setTimeout(() => {
        setEmojis(prev => prev.filter(e => e.id !== emoji.id));
      }, 5000);
    };

    const interval = setInterval(createEmoji, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <EffectsContainer>
      {sparkles.map(sparkle => (
        <Sparkle
          key={sparkle.id}
          initial={{ opacity: 0, scale: 0, x: sparkle.x, y: sparkle.y }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
            rotate: [0, 180],
          }}
          transition={{ duration: 1.5 }}
        />
      ))}

      {emojis.map(emoji => (
        <FloatingEmoji
          key={emoji.id}
          initial={{ opacity: 0, y: window.innerHeight, x: emoji.x }}
          animate={{
            opacity: [0, 1, 0],
            y: -100,
            x: emoji.x + (Math.random() - 0.5) * 200,
          }}
          transition={{ duration: 5 }}
        >
          {emoji.icon}
        </FloatingEmoji>
      ))}
    </EffectsContainer>
  );
};

export default RomanticEffects; 