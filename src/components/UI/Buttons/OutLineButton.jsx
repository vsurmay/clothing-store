import styled from "styled-components";

const OutLineButton = styled.button`
  font-family: "Oswald";
  font-weight: 500;
  font-size: ${(props) => (props.small ? "12px" : "14px")};
  line-height: 21px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  color: ${(props) => (props.delete ? "#eb5757" : "#3f3f3f")};
  padding: ${(props) => (props.small ? "4px 14px" : "8px 28px")};
  border: ${(props) =>
    props.delete ? "2px solid #eb5757" : "2px solid #3f3f3f"};
  transition: all 0.5s ease;
  display: flex;
  gap: 4px;
  align-items: center;
  border-radius: ${(props) => (props.small ? "5px" : "0px")};

  &:hover {
    color: ${(props) => (props.delete ? "red" : "#000000")};
    border: ${(props) =>
      props.delete ? "2px solid red" : "2px solid #000000"};
  }
`;

export default OutLineButton;
