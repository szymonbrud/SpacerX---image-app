import styled from 'styled-components';
import media from '../../utlis/media';

const AboutButton = styled.p`
  margin: 0;
  padding: 0; 
  color: white;
  font-weight: 300;
  position: absolute;
  top: ${({stateOfApp}) => stateOfApp === 1 ? 2 : 7}vw;
  right: ${({stateOfApp}) => stateOfApp === 1 ? 6 : 6}vw;
  font-size: 1.2rem;
  cursor: pointer;

  transition: .2s;
  
  ${media.tablet`
    top: 2vw;
    right: 3vw;
  `}

  ${media.desktop`
    font-size: 1rem;
  `}

  @media(max-width: 900px) and (orientation: landscape){
    font-size: .9rem;
  }

  ${media.fullHd`
    font-size: 1.6rem;
  `}
`;

export default AboutButton;