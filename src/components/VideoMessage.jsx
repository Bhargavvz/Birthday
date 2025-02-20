import { motion } from 'framer-motion';
import styled from '@emotion/styled';
import { useRef, useState } from 'react';

const VideoSection = styled.section`
  min-height: 100vh;
  padding: 100px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const VideoContainer = styled(motion.div)`
  max-width: 800px;
  width: 100%;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  padding: 20px;
  backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

const VideoPlayer = styled.div`
  position: relative;
  padding-top: 56.25%; /* 16:9 Aspect Ratio */
  
  video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 10px;
  }
`;

const Controls = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
`;

const Button = styled.button`
  background: rgba(255, 105, 180, 0.8);
  border: none;
  padding: 10px 20px;
  border-radius: 25px;
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 105, 180, 1);
    transform: scale(1.05);
  }
`;

const VideoMessage = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <VideoSection id="video">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{ marginBottom: '50px' }}
      >
        A Special Message For You
      </motion.h2>

      <VideoContainer
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <VideoPlayer>
          <video
            ref={videoRef}
            src="/path-to-your-video.mp4"
            poster="/path-to-thumbnail.jpg"
          />
        </VideoPlayer>

        <Controls>
          <Button onClick={togglePlay}>
            {isPlaying ? '⏸ Pause' : '▶ Play'}
          </Button>
        </Controls>
      </VideoContainer>
    </VideoSection>
  );
};

export default VideoMessage; 