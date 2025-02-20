import styled from '@emotion/styled';

export const Stars = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  background: radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.5) 1px, transparent 1px);
  background-size: 50px 50px;
  animation: twinkle 2s infinite alternate;

  @keyframes twinkle {
    0% { opacity: 0.3; }
    100% { opacity: 1; }
  }
`; 