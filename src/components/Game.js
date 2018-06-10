import React from 'react'
import styled from 'styled-components'
import {connect} from 'react-redux'
import Card from './Card'
import Deck from './Deck'

const Root = styled.div`
  font-family: 'San Francisco';
  display: grid;
  grid-template-areas: 'PlayerSpace PlayerSpace'
                       'PlayerSpace PlayerSpace'
                       'Log Log'
  ;
  gap: 1em;
`

const PlayerSpace = styled.div`
  grid-area: PlayerSpace;
  border: 1px solid blue;
  display: grid;
  grid-template-columns: auto auto;
  box-sizing: border-box;

`

// const Supply = styled.div`
//   grid-area: Supply;
//   border: 1px solid red;
// `

const Log = styled.div`
  grid-area: Log;
  border: 1px solid grey;
`

const Hand = styled.div`
  display: grid;
  grid-template-columns: repeat(5, auto);
  grid-template-rows: repeat(4, auto);
  border: 1px solid red;
  box-sizing: border-box;
  align-content: space-between;
  justify-content: space-between;
  grid-row-gap: 1em;
  padding: 1em;
`

// const BaseCard = styled.div`
//   font-size: 0.7em;
//   padding: 0.5em;
//   border-radius: 1em;
//   width: 12em;
//   height: 10em;
// `

// const Landmark = styled(BaseCard)`
//   border: 1px solid gold;
// `

// const Card = styled(BaseCard)`
//   border: 1px dotted violet;
// `

const User = styled.div`
  border-radius: 50%;
  border: 1px solid magenta;
  width: 8em;
  height: 8em;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Game = ({players, landmarkSlugs}) => (
  <Root>
    <PlayerSpace>
      {players.map(player =>
        <Hand>
          <User>User here</User>
          {landmarkSlugs.map(landmark => <Card slug={landmark} />)}
          {player.cardSlugs.map(slug => <Card slug={slug} />)}
        </Hand>
      )}
    </PlayerSpace>
    <Log>
      <Deck />
    </Log>
  </Root>
)

export default connect(
  state => ({
    players: state.game.players,
    landmarkSlugs: state.game.landmarkSlugs
  })
)(Game)
