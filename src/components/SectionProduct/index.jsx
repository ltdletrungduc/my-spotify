import React from 'react'
import { BlockHeadingStyled } from '../BlockHeading/styled'
import { ItemProductStyled } from '../ItemProduct/styled'
import { ListProductStyled } from '../ListProduct/styled'
import { TitlePrimaryStyled } from '../TitlePrimary/styled'
import { SectionProductStyled } from './styled'
import PropTypes from 'prop-types'

function SectionProduct({arrFake}) {
  return (
    <SectionProductStyled>
      {arrFake.map((obj) => (
        <BlockHeadingStyled>
          <TitlePrimaryStyled>{obj.title}</TitlePrimaryStyled>
          {obj.linkShowAll ? <a className='show-more' href="#">Show all</a> : ''}
        </BlockHeadingStyled>
      ))}
      {arrFake.map((obj) => (
        <ListProductStyled>
          {obj.listAlbum.map((item) => (
            console.log(item.id),
            <ItemProductStyled key={item.id}>
              <a href="#">
                <figure>
                  <img src={item.img} />
                </figure>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </a>
            </ItemProductStyled>
          ))}
        </ListProductStyled>
      ))}
    </SectionProductStyled>
  )
}

SectionProduct.propTypes = {
  arrFake: PropTypes.array,
}
SectionProduct.defaultProps = {
  arrFake: [],
}

export default SectionProduct
