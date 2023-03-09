import React from 'react'
import ButtonPrimary from '../ButtonPrimary'
import IconArrow from '../IconArrow'
import { BlockInformationStyled, BlockArrow, BlockButton } from './styled'

function BlockInformation() {
  return (
    <BlockInformationStyled>
      <BlockArrow>
        <li>
          <IconArrow/>
        </li>
        <li>
          <IconArrow/>
        </li>
      </BlockArrow>
      <BlockButton>
        <li>
          <ButtonPrimary href="#"/>
        </li>
        <li>
          <ButtonPrimary href="#"/>
        </li>
      </BlockButton>
    </BlockInformationStyled>
  )
}

export default BlockInformation