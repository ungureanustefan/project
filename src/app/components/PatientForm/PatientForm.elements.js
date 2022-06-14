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

export const Form = styled.form`
  background-color: rgba(255, 255, 255, 0.5);
  box-shadow: 0px 1px 10px 5px rgba(0, 0, 0, 0.77);
  padding: 2.3rem 0.5rem;
  border-radius: 0.3rem;
  margin-bottom: 2%;
`;
export const StyledInput = styled.div`
  margin: 0 2.5rem 1.2rem 0.5rem;
`;
export const InputSize = styled.input`
  display: block;
  width: 100%;
  height: 1.5rem;
  padding: 0.3rem 0.4rem;
  border-radius: 0.2rem;
  outline: 0;
  border-style: none;
  margin-top: 0.4rem;
  margin-left: 10px;
  border-bottom: 2px solid;
  background-color: transparent;
`;

export const Label = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.125rem;
  margin-bottom: 0.5rem;
`;

export const RadioLabel = styled.label`
  display: grid;

  position: relative;
  cursor: pointer;
  input {
    position: relative;
    opacity: 0;
    cursor: pointer;
  }
  span {
    position: relative;
    top: 0;
    left: 0;
    height: 25px;
    width: 25px;
    background-color: #eee;
    border-radius: 50%;
  }

  &:hover input ~ span {
    background-color: #ccc;
  }

  input:checked ~ span {
    background-color: #686666;
  }

  span {
    &:after {
      content: "";
      position: relative;
      display: none;
    }
  }

  input:checked ~ span:after {
    display: block;
  }
  span:after {
    top: 9px;
    left: 9px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: white;
  }
`;

export const Textarea = styled.textarea`
  width: 100%;
  min-height: 6rem;
  resize: vertical;
  padding: 0.5rem 0 0 0.5rem;
`;

export const Submit = styled.button`
  width: 30%;
  margin-left: 35%;
  font-weight: bold;
  font-size: 1rem;
  padding: 0.8rem;
  border-radius: 20px;
  cursor: pointer;
  &:hover {
    background: white;
    transition: 0.4s ease-out;
  }
`;

export const H1 = styled.header`
  font-family: "Brush Script MT", cursive;
  text-align: center;
  font-size: 3.5rem;
  margin: auto;
`;
