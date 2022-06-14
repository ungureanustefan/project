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

export const Div = styled.div`
  background-color: rgba(255, 255, 255, 0.5);
  box-shadow: 0px 1px 10px 5px rgba(0, 0, 0, 0.77);
  padding: 2.3rem 0.5rem;
  border-radius: 0.3rem;
  height: 750px;
  overflow: auto;
  overflow-x: hidden;
`;

export const InputSize = styled.input`
  display: block;
  width: 20vh;
  height: 1.5rem;
  padding: 0.3rem 0.4rem;
  border-radius: 0.2rem;
  outline: 0;
  border-style: none;
  margin-top: 0.4rem;
  margin-left: 35%;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 5%;
  border-bottom: 2px solid;
  background-color: transparent;
`;

export const Header = styled.header`
  font-family: "Brush Script MT", cursive;
  text-align: center;
  font-size: 3.5rem;
  margin: auto;
`;

export const CardContainer = styled.div`
  width: 70%;
  margin-left: 14%;
  max-height: 210px;
  margin-bottom: 30px;
  padding-right: 30px;
  word-break: break-word;
  overflow: hidden;
  box-shadow: 0px 0px 15px -5px;
  transition: 0.3s;
  animation: ease-in;

  &:hover {
    overflow: auto;
    overflow-x: hidden;
    transform: scale(1.1);
    box-shadow: 0px 0px 15px 0px;
  }
`;
export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem;
  margin-top: 0.5rem;
  width: 100%;
  h3 {
    text-decoration: underline;
    font-style: italic;
    font-size: 25px;
    margin: 0;
    padding: 0;
  }
`;
export const CardTitle = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
`;

export const Button = styled.button`
background-color: transparent;
background-repeat: no-repeat;
border: none;
cursor: pointer;
overflow: hidden;
outline: none;
text-decoration: none;
  }
`;
