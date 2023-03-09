import React from 'react'
import Header from '../Header'
import MainContent from '../MainContent'
import { ContainerStyled } from './styled'

function ContainerLayout() {
  return (
    <ContainerStyled>
      <Header/>
      <MainContent/>
    </ContainerStyled>
  )
}

export default ContainerLayout