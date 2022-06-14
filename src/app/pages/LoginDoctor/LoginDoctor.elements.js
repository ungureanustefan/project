import styled from "styled-components/macro";

export const Header = styled.header`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
`;

export const MainHeader = styled.div`
  text-align: center;
  border-radius: 30px;
  transition: 0.5s;
  &:hover {
      box-shadow: 0px 11px 54px 0px rgba(0, 0, 0, 0.75)
  }
  h1 {
    font-family: 'Brush Script MT', cursive;

    font-size: 5.5rem;
    margin: 20px;
  }

  hr {
   margin: auto;
  border: none;
  clear:both;
  display:block;
  width: 50%;               
  background-color: black;
  padding: 2.5px;
  }

  h3 {
    font-size: 2rem;
    margin: 20px;
  }

  input {
    width: 90%;
    padding: 1rem;
    margin: 20px 0px;
    border: none;
    border-bottom: 2px solid black;
    border-radius: 30px;
    font-size: 1.5rem;
    outline: none;
  }

  button {
      padding: 1rem 3rem;
      font-size: 1.2 rem;
      background: #B0A2EF
      color: white;
      border: none;
      border-radius: 50px;
      cursor: pointer;
      outline: none;
      margin: 20px;
  }

  button:hover {
      transform: scale(1.2);
  }
`;
