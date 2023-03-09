import styled from "styled-components";

const ItemProductStyled = styled.li`
  width: 20%;
  img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
  }
  a {
    color: #fff;
    text-decoration: none;
    display: block;
    padding: 16px;
    background: #181818;
    transition: opacity 0.26s;
    &:hover {
      opacity: 0.8;
    }
  }
`;

export { ItemProductStyled };
