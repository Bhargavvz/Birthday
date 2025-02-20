import { BrowserRouter as Router } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import WelcomeScreen from './components/WelcomeScreen';
import Timeline from './components/Timeline';
import LoveNotes from './components/LoveNotes';
import PhotoGallery from './components/PhotoGallery';
import LoveLetter from './components/LoveLetter';
import FloatingHearts from './components/FloatingHearts';
import LoadingScreen from './components/LoadingScreen';
import BirthdayCountdown from './components/BirthdayCountdown';
import RomanticEffects from './components/RomanticEffects';
import { Stars } from './components/Stars';
import BirthdayCelebration from './components/BirthdayCelebration';
import VideoButton from './components/VideoButton';
import VideoModal from './components/VideoModal';
import Footer from './components/Footer';

function App() {
  const [loading, setLoading] = useState(true);
  const [showCelebration, setShowCelebration] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const [countdownComplete, setCountdownComplete] = useState(false);

  const isAfterBirthday = () => {
    const now = new Date();
    const targetDate = new Date('2025-02-24T00:00:00+05:30');
    return now >= targetDate;
  };

  useEffect(() => {
    if (isAfterBirthday()) {
      setCountdownComplete(true);
    }

    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  const handleCelebrationStart = () => {
    if (isAfterBirthday()) {
      setShowCelebration(true);
      setCountdownComplete(true);
    }
  };

  const handleCelebrationClose = () => {
    setShowCelebration(false);
  };

  const handleVideoClick = () => {
    if (isAfterBirthday()) {
      setShowVideo(true);
    }
  };

  const handleVideoClose = () => {
    setShowVideo(false);
  };

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <Router>
      <div className="app">
        <Stars />
        <FloatingHearts />
        <RomanticEffects />
        <Navigation />
        <main>
          <WelcomeScreen />
          <BirthdayCountdown 
            onCelebration={handleCelebrationStart}
          />
          <Timeline />
          <PhotoGallery />
          <LoveNotes />
          <LoveLetter />
        </main>
        <VideoButton 
          onClick={handleVideoClick}
          isEnabled={isAfterBirthday()}
        />
        {showCelebration && isAfterBirthday() && (
          <BirthdayCelebration onClose={handleCelebrationClose} />
        )}
        {showVideo && isAfterBirthday() && (
          <VideoModal onClose={handleVideoClose} />
        )}
        <Footer />
      </div>
    </Router>
  );
}

export default App; 