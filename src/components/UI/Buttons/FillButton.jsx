import styled from "styled-components";

const FillButton = styled.button`
  margin: 10px;
  padding: 10px 30px;
  font-family: "Oswald", sans-serif;
  font-weight: 500;
  font-size: 14px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  color: #ffffff;
  background-color: #000000;
  transition: all 0.5s ease;

  &:hover {
    background-color: #eb5757;
  }
`;

export default FillButton;
