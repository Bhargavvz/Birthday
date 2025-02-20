import { motion, useScroll, useTransform } from 'framer-motion';
import styled from '@emotion/styled';
import { useRef } from 'react';

const TimelineSection = styled.section`
  min-height: 100vh;
  padding: 100px 20px;
  position: relative;
  background: linear-gradient(to bottom, rgba(10, 10, 42, 0.8), rgba(10, 10, 42, 0.95));

  @media (max-width: 768px) {
    padding: 80px 15px;
  }
`;

const TimelineContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 3px;
    height: 100%;
    background: linear-gradient(to bottom, 
      transparent, 
      var(--primary-color),
      var(--secondary-color),
      var(--primary-color),
      transparent
    );
    filter: drop-shadow(0 0 8px var(--primary-color));

    @media (max-width: 768px) {
      left: 30px;
      transform: none;
    }
  }
`;

const TimelineItem = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  padding: 40px 0;
  width: 100%;

  &:nth-of-type(even) {
    flex-direction: row-reverse;
  }

  @media (max-width: 768px) {
    flex-direction: column !important;
    padding: 30px 0;
    padding-left: 60px;
    position: relative;
  }
`;

const TimelineContent = styled(motion.div)`
  width: 45%;
  padding: 25px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  position: relative;
  overflow: hidden;
  
  @media (max-width: 768px) {
    width: 100%;
    margin-left: 0;
  }

  .image-container {
    width: 100%;
    aspect-ratio: 16/9;
    border-radius: 15px;
    overflow: hidden;
    margin-bottom: 15px;
    
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.3s ease;
    }

    &:hover img {
      transform: scale(1.05);
    }
  }

  h3 {
    color: var(--primary-color);
    margin-bottom: 10px;
    font-family: 'Great Vibes', cursive;
    font-size: 2rem;

    @media (max-width: 768px) {
      font-size: 1.8rem;
    }
  }

  .date {
    font-family: 'Quicksand', sans-serif;
    color: var(--accent-color);
    font-size: 0.9rem;
    margin-bottom: 10px;
  }

  p {
    line-height: 1.6;
    font-family: 'Dancing Script', cursive;
    font-size: 1.2rem;

    @media (max-width: 768px) {
      font-size: 1.1rem;
    }
  }

  .love-quote {
    font-style: italic;
    color: var(--accent-color);
    margin-top: 10px;
    font-size: 1rem;
  }
`;

const TimelineDot = styled(motion.div)`
  width: 25px;
  height: 25px;
  background: var(--primary-color);
  border-radius: 50%;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 0 0 15px var(--primary-color);
  
  &::before {
    content: '❤️';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 12px;
  }
  
  @media (max-width: 768px) {
    left: 30px;
    transform: none;
  }
`;

const SectionTitle = styled(motion.h2)`
  text-align: center;
  font-size: 3.5rem;
  margin-bottom: 50px;
  color: var(--primary-color);
  font-family: 'Great Vibes', cursive;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    font-size: 2.8rem;
    margin-bottom: 40px;
  }

  @media (max-width: 480px) {
    font-size: 2.5rem;
    margin-bottom: 30px;
  }
`;

const Timeline = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]);
  
  const timelineEvents = [
    {
      date: "April 7, 2023",
      title: "Us two in one frame",
      description: "That day we were not that close but we were still enjoying the day",
      image: "/assets/timeline/moment1.gif",
      quote: "Some meetings are not by chance, they're destined by the heart. ❤️"
    },
    {
      date: "May 31, 2023",
      title: "First Pic Together",
      description: "Remember that we had started to talk to each other",
      image: "/assets/timeline/moment2.jpg",
      quote: "Maybe that was the day I had started caring for you. 💝"
    },
    {
      date: "July 12, 2024",
      title: "The Day I got rejected",
      description: "I was controlling my feelings but ya, I was so much hurt",
      image: "/assets/timeline/moment3.jpg",
      quote: "I didn't lost hope on you I was waiting for you to accept me 💑"
    },
    {
      date: "September 11, 2024",
      title: "I didn't lost hope",
      description: "I had started to control my feelings",
      image: "/assets/timeline/moment4.jpg",
      quote: "The wait was worth it. 💑"
    },
    {
      date: "December 16, 2024",
      title: "The Day you finally accepted me",
      description: "Under the starlit sky, our hearts connected...",
      image: "/assets/timeline/moment5.jpg",
      quote: "The Most Wonderfull day of my life, My love was accepted. 💑"
    },
    {
      date: "January 7, 2025",
      title: "Our First Date",
      description: "I had so much fun with you that day",
      image: "/assets/timeline/moment6.jpg",
      quote: "We had so much fun that day. 💝"
    },
    {
      date: "Today",
      title: "Happy Birthday, My Love",
      description: "Today we celebrate you, the most amazing person...",
      image: "/assets/timeline/moment7.jpg",
      quote: "You're not just my love, you're my everything. 🎂💖"
    }
  ];

  return (
    <TimelineSection id="timeline" ref={ref}>
      <SectionTitle
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Our Love Story ✨
      </SectionTitle>
      
      <TimelineContainer>
        {timelineEvents.map((event, index) => (
          <TimelineItem
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <TimelineDot
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.2 }}
            />
            <TimelineContent
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="image-container">
                <img src={event.image} alt={event.title} />
              </div>
              <div className="date">{event.date}</div>
              <h3>{event.title}</h3>
              <p>{event.description}</p>
              <p className="love-quote">{event.quote}</p>
              <motion.div
                className="sparkle"
                style={{
                  position: 'absolute',
                  top: Math.random() * 100 + '%',
                  left: Math.random() * 100 + '%'
                }}
              />
            </TimelineContent>
          </TimelineItem>
        ))}
      </TimelineContainer>
    </TimelineSection>
  );
};

export default Timeline; 