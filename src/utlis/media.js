import { css } from 'styled-components';

export const sizes = {
  fullHd: 1500,
  desktop: 950,
  tablet: 720,
  phone: 400,
};

export default Object.keys(sizes).reduce((acc, label) => { //wartość początkowa to 0 potem przyjmuje inną, obrznie prztważany element
  acc[label] = (...args) => css`
    @media (min-width: ${sizes[label]}px) {
      ${css(...args)}
    }
  `;

  return acc
}, {});
