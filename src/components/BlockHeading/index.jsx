import React from 'react'
import TitlePrimary from '../TitlePrimary'
import { BlockHeadingStyled } from './styled'

function BlockHeading() {
  return (
    <BlockHeadingStyled>
      <TitlePrimary/>
      <a className='show-more' href="#">Show all</a>
    </BlockHeadingStyled>
  )
}

export default BlockHeading