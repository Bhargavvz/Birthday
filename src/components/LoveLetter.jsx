import { motion } from 'framer-motion';
import styled from '@emotion/styled';

const LetterSection = styled.section`
  min-height: 100vh;
  padding: 100px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(to bottom, rgba(10, 10, 42, 0.8), rgba(10, 10, 42, 0.95));
`;

const LetterContainer = styled(motion.div)`
  max-width: 800px;
  margin: 0 auto;
  padding: 40px;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

const Title = styled(motion.h2)`
  font-family: 'Great Vibes', cursive;
  font-size: 3.5rem;
  color: var(--primary-color);
  text-align: center;
  margin-bottom: 40px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
`;

const Content = styled(motion.div)`
  font-family: 'Dancing Script', cursive;
  font-size: 1.8rem;
  line-height: 1.8;
  color: white;
  text-align: left;
  white-space: pre-line;

  p {
    margin-bottom: 20px;
  }

  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

const Signature = styled(motion.p)`
  font-family: 'Great Vibes', cursive;
  font-size: 2.5rem;
  color: var(--primary-color);
  text-align: right;
  margin-top: 40px;
`;

const LoveLetter = () => {
  const letterContent = `
Gunni Nanna,

Happy Happier and Happiest Birthdayyyy nanna, It is finally your day, and my day too. the day I had waited for sooo many days. I am soo soo sooooo sorry nanna nee birthday ki nen undalekapotunna. nen aithe nee birthday ni the most memorable day in your life cheddam anukunna nanna, but due to some other things nen nee birthday ni manchiga celebrate cheyyalekapotunna. nee kante ekkuva nene miss aitha nanna nee birthday ne! But nen naa feeling neeku chupettakunda neeku nenu leni feeling lekunda cheddam ani anukunna anduke I am trying my best to make you happy even if I am not around. 

But nanna do you remember naa birthday ni entha manchiga celebrate chesavo. literally it was the best day of my life. probably naa birthday ni nen eppudu antha manchiga celebrate chesukole kavachu nanna. Nee birthday kuda alane cheddam anukunna but sadly it is not possiable.

But nanna remember one thing…. I love youuu soooo soooo much nannaa, nee kante challlaaa ekkuva.. nuv naa life lo jargina oka miracle nanna… nuv dorkatam nen enni janmalu chesukunna punyamo.. nijam nanna joke kaadu nen nijam ga challlaa lucky nee lanti manchi, caring, loving, cute, pretty, and most perfect ammayi dorkatam. Really I feel so blessed to have you in my life.

Nanna, I am really sorry if i done anything wrong. naaku telusu ninnu chala sarlu hurt chesa ani but nanna avvi anni naaku telvakunda chesi unta.. oka vela em aina telsi chesina please koncham kshaminchu bngrm. Nanna I promise you, nen ninnu eppudu odleyya nanna. I will be always there for you untill death separates us. I will be your biggest supporter!

Once again Happy Birthday nanna,  May this year bring you all the happiness you deserve and more.

With all my heart,`;

  return (
    <LetterSection id="letter">
      <LetterContainer
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <Title
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          My Birthday Letter to You 💝
        </Title>
        
        <Content
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          {letterContent}
        </Content>

        <Signature
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          Vaatsavv ❤️
        </Signature>
      </LetterContainer>
    </LetterSection>
  );
};

export default LoveLetter; 