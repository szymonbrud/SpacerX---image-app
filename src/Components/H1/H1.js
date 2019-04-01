import styled from 'styled-components';
import media from '../../utlis/media';

const H1 = styled.h1`
  font-size: ${({stan}) => stan ? 1.5 : 2}rem;
  margin-top: ${({stan}) => stan ? 8 : 0}vh;
  margin-bottom: ${({stan}) => stan ? -1.5 : 0}vh;
  padding: 0;
  color: white;
  font-weight: ${({stan}) => stan ? 500 : 700}vh;
  text-align: center;

  ${media.tablet`
    font-size: ${({stan}) => stan ? 2 : 3}rem
  `}

`; 

export default H1;