import React from 'react'
import { ItemProductStyled } from './styled'

function ItemProduct() {
  return (
    <ItemProductStyled>
      <a href="#">
        <figure>
          <img src="https://i.scdn.co/image/ab67706f00000002d07cc068392757225b137bce" alt="" />
        </figure>
        <h3>Nghe gi</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus expedita accusamus inventore et alias molestias, vero fugiat laborum vitae ratione obcaecati deserunt! Provident doloribus modi neque aperiam, dolorum qui nam?</p>
      </a>
    </ItemProductStyled>
  )
}

export default ItemProduct