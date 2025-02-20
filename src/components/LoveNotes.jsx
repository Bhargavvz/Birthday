import { motion } from 'framer-motion';
import styled from '@emotion/styled';
import { useState } from 'react';

const NotesSection = styled.section`
  min-height: 100vh;
  padding: 100px 20px;
  position: relative;
`;

const NotesContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  padding: 20px;
`;

const Note = styled(motion.div)`
  position: relative;
  height: 300px;
  border-radius: 15px;
  overflow: hidden;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
`;

const ImageBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }
`;

const NoteOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(10, 10, 42, 0.5);
  backdrop-filter: blur(2px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  transition: background 0.3s ease;

  &:hover {
    background: rgba(10, 10, 42, 0.4);
  }
`;

const NoteContent = styled.div`
  color: white;
  text-align: center;
  font-family: 'Dancing Script', cursive;
  font-size: 1.5rem;
  line-height: 1.6;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  opacity: ${props => props.isRevealed ? 1 : 0};
  transform: ${props => props.isRevealed ? 'translateY(0)' : 'translateY(20px)'};
  transition: all 0.5s ease;
`;

const NoteDate = styled.div`
  position: absolute;
  bottom: 15px;
  right: 15px;
  color: white;
  font-size: 0.9rem;
  font-family: 'Quicksand', sans-serif;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  background: rgba(0, 0, 0, 0.3);
  padding: 4px 8px;
  border-radius: 4px;
`;

const SectionTitle = styled(motion.h2)`
  text-align: center;
  font-size: 3.5rem;
  margin-bottom: 50px;
  color: var(--primary-color);
  font-family: 'Great Vibes', cursive;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
`;

const AddNoteForm = styled.form`
  max-width: 600px;
  margin: 50px auto;
  padding: 20px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 15px;
  backdrop-filter: blur(5px);
`;

const LoveNotes = () => {
  const [notes, setNotes] = useState([
    {
      id: 1,
      content: "Your smile brightens my darkest days...",
      image: "/assets/photos/note1.jpg",
      date: "Click to reveal",
      isRevealed: false
    },
    {
      id: 2,
      content: "Every moment with you feels like magic...",
      image: "/assets/photos/note2.jpg",
      date: "Click to reveal",
      isRevealed: false
    },
    {
      id: 3,
      content: "You make my heart skip a beat...",
      image: "/assets/photos/note3.jpg",
      date: "Click to reveal",
      isRevealed: false
    }
  ]);

  const [newNote, setNewNote] = useState('');

  const toggleNote = (id) => {
    setNotes(notes.map(note => 
      note.id === id ? { ...note, isRevealed: !note.isRevealed } : note
    ));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newNote.trim()) {
      setNotes([...notes, { 
        id: Date.now(), 
        message: newNote, 
        isRevealed: false 
      }]);
      setNewNote('');
    }
  };

  return (
    <NotesSection id="notes">
      <SectionTitle
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Love Notes 💌
      </SectionTitle>

      <NotesContainer>
        {notes.map(note => (
          <Note
            key={note.id}
            onClick={() => toggleNote(note.id)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <ImageBackground>
              <img src={note.image} alt="Love note background" />
            </ImageBackground>
            <NoteOverlay>
              <NoteContent isRevealed={note.isRevealed}>
                {note.content}
              </NoteContent>
              <NoteDate>{note.date}</NoteDate>
            </NoteOverlay>
          </Note>
        ))}
      </NotesContainer>
    </NotesSection>
  );
};

export default LoveNotes; 