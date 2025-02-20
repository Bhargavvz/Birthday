import { motion } from 'framer-motion';
import styled from '@emotion/styled';
import { useState } from 'react';

const GallerySection = styled.section`
  min-height: 100vh;
  padding: 100px 20px;
  background: linear-gradient(to bottom, rgba(10, 10, 42, 0.9), rgba(10, 10, 42, 0.95));
`;

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 25px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    gap: 15px;
    padding: 10px;
  }
`;

const PhotoCard = styled(motion.div)`
  position: relative;
  border-radius: 15px;
  overflow: hidden;
  cursor: pointer;
  aspect-ratio: 3/4;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  .overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
    padding: 15px;
    transform: translateY(100%);
    transition: transform 0.3s ease;

    h3 {
      font-size: 1.2rem;
      margin-bottom: 5px;
      color: white;
    }

    p {
      font-size: 0.9rem;
      color: rgba(255, 255, 255, 0.8);
    }
  }

  &:hover {
    img {
      transform: scale(1.1);
    }
    .overlay {
      transform: translateY(0);
    }
  }
`;

const Modal = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;

  img {
    max-width: 90%;
    max-height: 90vh;
    border-radius: 15px;
  }
`;

const photos = [
  {
    id: 1,
    src: "/assets/gallery/gallery1.jpg",
    caption: "We were bestest friends",
    date: "The person I don't want to lose"
  },
  {
    id: 2,
    src: "/assets/gallery/gallery2.jpg",
    caption: "My Birthday",
    date: "You had really made me feel special"
  },
  {
    id: 3,
    src: "/assets/gallery/gallery3.jpg",
    caption: "Azura",
    date: "Summer memories"
  },
  {
    id: 4,
    src: "/assets/gallery/gallery4.jpg",
    caption: "Charminar Shopping",
    date: "I had made you so mad on that day, sorry my love"
  },
  {
    id: 5,
    src: "/assets/gallery/gallery5.jpg",
    caption: "Some Random Pic",
    date: "We take a lot of random pics together"
  },
  {
    id: 6,
    src: "/assets/gallery/gallery6.jpg",
    caption: "Special Moments",
    date: "Just because"
  }
];

const PhotoGallery = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  return (
    <GallerySection id="gallery">
      <motion.h2
        className="romantic-gradient"
        style={{ textAlign: 'center', fontSize: '3.5rem', marginBottom: '50px' }}
      >
        Our Precious Moments 
      </motion.h2>

      <GalleryGrid>
        {photos.map((photo) => (
          <PhotoCard
            key={photo.id}
            whileHover={{ y: -5 }}
            onClick={() => setSelectedPhoto(photo)}
          >
            <img src={photo.src} alt={photo.caption} />
            <div className="overlay">
              <h3 className="romantic-text">{photo.caption}</h3>
              <p>{photo.date}</p>
            </div>
          </PhotoCard>
        ))}
      </GalleryGrid>

      {selectedPhoto && (
        <Modal
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedPhoto(null)}
        >
          <img src={selectedPhoto.src} alt={selectedPhoto.caption} />
        </Modal>
      )}
    </GallerySection>
  );
};

export default PhotoGallery; 