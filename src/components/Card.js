import React from 'react'
import styled from 'styled-components'
import cardService from '../lib/CardService'

const colors = {
  restaurant: 'palevioletred',
  primary: 'lightblue',
  secondary: 'lightgreen',
  major: 'mediumpurple',
  landmark: 'gold'
}

const Root = styled.div`
  font-size: 0.7em;
  padding: 0.5em;
  border-radius: 0.5em;
  width: 12em;
  height: 10em;
  border: 1px solid grey;
  display: flex;
  flex-direction: column;
  background: ${props => colors[props.incomeType]};

  & + & {
  }
`

const Costs = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const Name = styled.div`
  font-weight: bold;
`

const Description = styled.div`
  margin-top: auto;
`

// TODO: is constructed
const Card = ({slug}) => {
  const {name, diceCost, constructionCost, effectDescription, resourceType, incomeType} = cardService.bySlug(slug)
  return (
    <Root incomeType={incomeType}>
      <Costs>
        <div>{diceCost && `🎲${diceCost.join('-')}`}</div>
        <div>💲{constructionCost}</div>
      </Costs>
      <Name>{resourceType}{name}</Name>
      <Description>{effectDescription}</Description>
    </Root>
  )
}

export default Card
