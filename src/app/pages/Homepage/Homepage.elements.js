import styled from "styled-components/macro";

export const Container = styled.div`
  width: 100%;
  margin: 4.5rem auto 0 auto;
  z-index: 100;
  @media (min-width: 576px) {
    max-width: 540px;
    z-index: 100;
  }
  @media (min-width: 768px) {
    max-width: 720px;
    z-index: 100;
  }
`;

export const Img = styled.img`
  margin-top: 15%;
  width: 60%;
  margin-left: 18%;
  @media (max-width: 320px) {
    margin-top: 15%;
    width: 80%;
    margin-left: 10%;
  }
`;

export const Anchor = styled.span`
  color: black;
  font-style: italic;
  text-decoration: underline;
`;

export const Div = styled.div`
  background-color: rgba(255, 255, 255, 0.5);
  box-shadow: 0px 1px 10px 5px rgba(0, 0, 0, 0.77);
  padding: 2.3rem 0.5rem;
  border-radius: 0.3rem;
  height: 750px;
`;

export const Header = styled.header`
  font-family: "Brush Script MT", cursive;
  text-align: center;
  font-size: 3.5rem;
  margin: auto;
`;

export const Paragraph = styled.p`
  font-weight: bold;
  font-size: 20px;
  margin-left: 50px;
  padding-right: 30px;
  word-wrap: break-word;
`;
