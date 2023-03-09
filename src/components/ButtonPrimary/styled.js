import styled from "styled-components";

const ButtonPrimaryStyled = styled.a`
  min-height: 32px;
  padding: 0 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-weight: 700;
  border: 1px solid #fff;
  border-radius: 32px;
  margin: 0 10px;
  transition: opacity 0.26s;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;

export { ButtonPrimaryStyled };
