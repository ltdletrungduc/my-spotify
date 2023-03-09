import styled from "styled-components";

const HeaderStyled = styled.header`
  width: 200px;
  padding: 24px 20px 0;
  background: #000;
  min-height: 100%;
  height: 100vh;
`;
const HeaderLogo = styled.a`
  margin-bottom: 40px;
  display: block;
  transition: opacity 0.26s;
  &:hover {
    opacity: 0.7;
  }
`;
const HeaderLogoImage = styled.svg`
  max-width: 131px;
  display: block;
`;
const HeaderNavigationItem = styled.li`
  margin-bottom: 15px;
`;
const HeaderLink = styled.a`
  color: #fff;
  text-decoration: none;
  font-size: 14px;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 16px;
  transition: opacity 0.26s;
  word-break: break-all;
  &:hover {
    opacity: 0.7;
  }
`;
const HeaderExpand = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  border-bottom: 1px solid #282828;
`;
const HeaderNavigation = styled(HeaderExpand)`
  margin-bottom: 40px;
  border-bottom: none;
`;
const HeaderExpandItem = styled.li`
  margin-bottom: 20px;
`;
const IconHeader = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
`;
const IconCreate = styled(IconHeader)`
  background: rgba(255, 255, 255, 0.75);
`;
const IconLiked = styled(IconHeader)`
  background: linear-gradient(135deg, #450af5, #c4efd9);
`;
export {
  HeaderStyled,
  HeaderLogo,
  HeaderNavigation,
  HeaderExpand,
  HeaderNavigationItem,
  HeaderLink,
  HeaderExpandItem,
  IconCreate,
  IconLiked,
  HeaderLogoImage,
  IconHeader,
};
