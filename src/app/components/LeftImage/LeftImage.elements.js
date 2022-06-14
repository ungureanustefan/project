import styled from "styled-components/macro";

export const Img = styled.img`
  height: 40%;
  width: 30%;
  position: absolute;
  top: 40%;
  left: 0;
  @media screen and (max-width: 480px) {
    width: 0;
    height: 0;
    display: none;
  }
  @media screen and (max-width: 768px) {
    width: 0;
    height: 0;
    display: none;
  }
  @media screen and (max-width: 1787px) {
    width: 0;
    height: 0;
    display: none;
  }
`;
