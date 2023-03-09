import React from 'react'
import BlockHeading from '../BlockHeading'
import ListProduct from '../ListProduct'
import { SectionProductStyled } from './styled'

function SectionProduct() {
  return (
    <SectionProductStyled>
      <BlockHeading/>
      <ListProduct></ListProduct>
    </SectionProductStyled>
  )
}

export default SectionProduct