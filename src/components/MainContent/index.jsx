import React from 'react'
import BlockInformation from '../BlockInformation'
import SectionProduct from '../SectionProduct'
import { MainStyled } from './styled'

function MainContent() {
  return (
    <MainStyled>
      <BlockInformation/>
      <SectionProduct/>
    </MainStyled>
  )
}

export default MainContent