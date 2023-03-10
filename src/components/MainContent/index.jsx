import React from 'react'
import BlockInformation from '../BlockInformation'
import SectionProduct from '../SectionProduct'
import { MainStyled } from './styled'

const arrFake = [
  {
    title: 'Test1',
    listAlbum: [
      {
        img: 'https://i.scdn.co/image/ab67706f00000002d07cc068392757225b137bce',
        title: 'Nghe gi 1',
        description: '1Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        id: 1,
      },
      {
        img: 'https://i.scdn.co/image/ab67706f00000002d07cc068392757225b137bce',
        title: 'Nghe gi 2',
        description: '2Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        id: 2,
      },
      {
        img: 'https://i.scdn.co/image/ab67706f00000002d07cc068392757225b137bce',
        title: 'Nghe gi 3',
        description: '3Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        id: 3,
      },
      {
        img: 'https://i.scdn.co/image/ab67706f00000002d07cc068392757225b137bce',
        title: 'Nghe gi 4',
        description: '4Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        id: 4,
      },
    ],
    linkShowAll: true
  }
]


function MainContent() {
  return (
    <MainStyled>
      <BlockInformation/>
      <SectionProduct arrFake={arrFake}/>
    </MainStyled>
  )
}

export default MainContent