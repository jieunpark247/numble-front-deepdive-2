import { styled } from 'styled-components';
import { TOPBAR_HEIGHT } from '@/constants/theme';
import { useEffect, useRef, useState } from 'react';

function Progressbar() {
  const timeline = useRef();
  const [scrollPercent, setScrollPercent] = useState(-100);
  const setTimeline = () => {
    const percent = Math.floor(
      (window.scrollY / (document.body.clientHeight - window.innerHeight)) * 100
    );
    setScrollPercent(-(100 - percent));
  };
  useEffect(() => {
    window.addEventListener('scroll', setTimeline);
    return () => {
      window.removeEventListener('scroll', setTimeline);
    };
  }, []);

  return (
    <Wrap>
      <ProgressbarStyled ref={timeline} scrollPercent={scrollPercent} />
    </Wrap>
  );
}
const Wrap = styled.div`
  position: fixed;
  top: ${TOPBAR_HEIGHT}px;
  left: 0;
  width: 100%;
  height: 10px;
  background: #c7c7c7;
  z-index: 10;
`;

const ProgressbarStyled = styled.div`
  transform: translateX(${(props) => props.scrollPercent}%);
  transition: 0.1s all ease;
  background: red;
  width: 100%;
  height: 10px;
`;

export default Progressbar;
