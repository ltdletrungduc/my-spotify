import React from 'react';
import NavBar from '../NavBar';
import MainContent from '../MainContent';
import { ContainerStyled } from './styled';

function ContainerLayout() {
  return (
    <ContainerStyled>
      <NavBar />
      <MainContent />
    </ContainerStyled>
  );
}

export default ContainerLayout;