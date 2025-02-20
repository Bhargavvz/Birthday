import { motion } from 'framer-motion';
import styled from '@emotion/styled';
import { useState, useEffect } from 'react';
import BirthdayCelebration from './BirthdayCelebration';

const CountdownSection = styled(motion.section)`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 100px 20px;
  background: linear-gradient(to bottom, rgba(10, 10, 42, 0.8), rgba(10, 10, 42, 0.95));
  position: relative;
  z-index: 2;
  margin: 0;
  scroll-margin-top: 80px; // Adjust based on your navigation height
`;

const CountdownTitle = styled(motion.h2)`
  font-family: 'Great Vibes', cursive;
  font-size: 4.5rem;
  color: var(--primary-color);
  text-align: center;
  margin-bottom: 60px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    font-size: 3rem;
    margin-bottom: 40px;
  }
`;

const CountdownContainer = styled(motion.div)`
  display: flex;
  gap: 40px;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;

  @media (max-width: 768px) {
    gap: 20px;
    padding: 10px;
  }
`;

const TimeUnit = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(255, 255, 255, 0.1);
  padding: 30px 40px;
  border-radius: 20px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  min-width: 180px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    min-width: 140px;
    padding: 20px 25px;
  }
`;

const TimeValue = styled.span`
  font-family: 'Quicksand', sans-serif;
  font-size: 4rem;
  color: var(--primary-color);
  font-weight: bold;
  margin-bottom: 10px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const TimeLabel = styled.span`
  font-size: 1.2rem;
  color: white;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-family: 'Quicksand', sans-serif;
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: 1rem;
    letter-spacing: 1px;
  }
`;

const Message = styled(motion.p)`
  font-family: 'Dancing Script', cursive;
  font-size: 1.5rem;
  color: white;
  text-align: center;
  margin-top: 40px;
  max-width: 600px;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 1.2rem;
    margin-top: 30px;
    padding: 0 20px;
  }
`;

const BirthdayCountdown = ({ onCelebration }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [isPast, setIsPast] = useState(false);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const targetDate = new Date('2025-02-24T00:00:00+05:30');
      const difference = targetDate.getTime() - now.getTime();

      // Check if we've passed the target date
      if (difference <= 0) {
        if (!isPast) {
          setIsPast(true);
          onCelebration();
        }
        
        // Calculate time since birthday (negative countdown)
        const timeSince = Math.abs(difference);
        setTimeLeft({
          days: Math.floor(timeSince / (1000 * 60 * 60 * 24)),
          hours: Math.floor((timeSince % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((timeSince % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((timeSince % (1000 * 60)) / 1000)
        });
      } else {
        // Calculate time until birthday
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [onCelebration, isPast]);

  return (
    <CountdownSection id="countdown">
      <CountdownTitle
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        {isPast ? "Time Since Your Special Day 🎂" : "Counting Down to Your Special Day 🎂"}
      </CountdownTitle>

      <CountdownContainer>
        {Object.entries(timeLeft).map(([unit, value]) => (
          <TimeUnit
            key={unit}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <TimeValue>{String(value).padStart(2, '0')}</TimeValue>
            <TimeLabel>{unit}</TimeLabel>
          </TimeUnit>
        ))}
      </CountdownContainer>

      <Message
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
      >
        {isPast 
          ? "Your birthday celebration continues! Every moment with you is precious! 💝"
          : "Every second brings us closer to celebrating you, my love! Can't wait to make your birthday special! 💝"
        }
      </Message>
    </CountdownSection>
  );
};

export default BirthdayCountdown; 