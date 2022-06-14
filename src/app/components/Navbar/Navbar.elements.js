import styled from "styled-components/macro";

export const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  li {
    padding: 18px 10px;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: white;
    text-align: center;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 100%;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: black;
      font-size: 20px;
    }
  }
`;

export const Li = styled.li`
  color: black;
  font-weight: bold;
`;

export const Logo = styled.div`
  display: flex;
  font-weight: bold;
  font-size: 20px;
  padding: 15px 0;
`;

export const Nav = styled.nav`
  z-index: 1;
  position: fixed;
  top: 0;
  background-image: repeating-linear-gradient(
    to bottom,
    rgb(203, 204, 203) 0%,
    rgb(163, 163, 163) 65.6%,
    rgb(173 171 171) 100%
  );

  width: 100%;
  height: 55px;
  border-bottom: 2px solid black;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  .logo {
    padding: 15px 0;
  }
`;
export const Anchor = styled.span`
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
  &:hover {
    background: #ddd;
    // linear-gradient(to left, #ddd 50%, white 50%) right;
    // background-size: 200%;
    // transition: 0.4s ease-out;
  }
`;

export const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 15px;
  right: 20px;
  z-index: 20;
  display: none;
  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }
  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) => (open ? "#ccc" : "#333")};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }
    &:nth-child(2) {
      transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;
