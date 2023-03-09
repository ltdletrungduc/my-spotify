import styled from "styled-components";

const BlockInformationStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 16px 32px;
`;
const BlockArrow = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
`;
const BlockButton = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
`;

export { BlockInformationStyled, BlockArrow, BlockButton };
