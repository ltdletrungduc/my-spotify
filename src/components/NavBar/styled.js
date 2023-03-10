import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const NavBarStyled = styled.nav`
  flex-shrink: 0;
  width: 237px;
  padding-top: 24px;
  background: #000;
  min-height: 100%;
  height: 100vh;
`;
const NavBarLogo = styled(Link)`
  display: block;
  margin-bottom: 18px;
  padding: 0 24px 9px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  transition: opacity 0.26s;
  &:hover {
    opacity: 0.7;
  }
  svg {
    display: block;
    max-width: 131px;
  }
`;
const NavList = styled.ul`
  margin-bottom: 24px;
`;
const NavItem = styled.li`
  font-weight: bold;
  padding: 0 8px;
  .nav-link {
    display: flex;
    gap: 16px;
    height: 40px;
    padding: 0 16px;
    cursor: pointer;
    align-items: center;
    color: #b3b3b3;
    transition: color 0.26s;
    svg {
      flex-shrink: 0;
      fill: currentColor;
      height: 24px;
      width: 24px;
    }
    .nav-icon {
      display: block;
    }
    .nav-icon-active {
      display: none;
    }
    &.is-active {
      color: #fff;
      .nav-icon {
        display: none;
      }
      .nav-icon-active {
        display: block;
      }
    }
    &:hover {
      color: #fff;
    }
  }
`;
const NavPlayListContainer = styled.div`
  margin-top: 24px;
`;
const NavPlayListAction = css`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 8px 24px;
  background-color: transparent;
  border: none;
  font-weight: bold;
  color: #fff;
  cursor: pointer;
  opacity: 0.7;
  transition: opacity 0.26s;
  &:hover {
    opacity: 1;
  }
  .playlist-icon {
    width: 24px;
    height: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 2px;
  }
  svg {
    fill: currentColor;
  }
`;
const NavPlayListCreate = styled.button`
  ${NavPlayListAction}
  .playlist-create {
    background-color: #fff;
    color: #000;
  }
`;
const NavPlayListLiked = styled(Link)`
  ${NavPlayListAction}
  .playlist-liked {
    background: linear-gradient(135deg, #450af5, #c4efd9);
    color: #fff;
  }
`;
const NavPlayList = styled.ul`
  padding: 0 24px;
  .nav-playlist-link {
    display: block;
    font-size: 1.4rem;
    line-height: calc(32 / 14);
    color: #b3b3b3;
    transition: color 0.26s;
    &:hover,
    &.is-active {
      color: #fff;
    }
  }
`;
export {
  NavBarStyled,
  NavBarLogo,
  NavList,
  NavItem,
  NavPlayListContainer,
  NavPlayListCreate,
  NavPlayListLiked,
  NavPlayList,
};
