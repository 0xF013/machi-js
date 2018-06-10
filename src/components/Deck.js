import React from 'react'
import styled from 'styled-components'
import {connect} from 'react-redux'
import Card from './Card'

const Root = styled.div`
  display: grid;
  grid-template-columns: repeat(5, auto);
  gap: 0.7em;
  padding: 0.7em;
`

const Stack = styled.div`
  position: relative;
  width: 12em;
  height: 12em;
`

const StackItem = styled.div`

  &:first-child {
    position: absolute;
    z-index: 2;
  }

  &:not(:first-child) {
    position: absolute;
    left: ${props => (props.index) * 2}px;
    transform: rotate(${props => (props.index) * 1.5}deg);
  }
`

const Deck = ({deck}) => {
  return (
    <Root>
      {deck.map(card =>
        <Stack>
          {Array(card.count).fill().map((_, i) => (
            <StackItem index={card.count - i}>
              <Card slug={card.slug} />
            </StackItem>
          ))}
        </Stack>
      )}
    </Root>
  )
}

export default connect(
  state => ({
    deck: state.game.deck
  })
)(Deck)
