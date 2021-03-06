import styled from "styled-components";
import { device, variable } from "../../styles/main";

export const Wrapper = styled.div`
  background: ${variable.colorSecondary};
  text-align: center;
  background-size: cover;
  padding: 15rem 0;
  margin-top: -10rem;
  position: relative;
  transform: skewY(-4.2deg);

  & > * {
    -webkit-transform: skewY(4.2deg);
    transform: skewY(4.2deg);
  }

  @media ${device.tablet} {
    padding: 12rem 0;
    margin-top: -4rem;
    overflow: hidden;
  }
`;

export const CardsHolder = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(46rem, 1fr));
  /* grid-gap: 3rem; */
  /* 36 */

  @media ${device.laptop} {
    grid-template-columns: repeat(auto-fit, minmax(60rem, 1fr));
  }

  @media ${device.tablet} {
    grid-template-columns: repeat(auto-fit, minmax(49rem, 1fr));
  }

  @media ${device.mobileL} {
    /* grid-template-columns: repeat(auto-fit, minmax(40rem, 1fr)); */
    grid-template-columns: repeat(auto-fit, minmax(24rem, 1fr));
  }
`;
