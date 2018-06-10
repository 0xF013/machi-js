import * as R from 'ramda'
import cardService from '../lib/CardService'

const initialState = {
  players: [],
  landmarkSlugs: [
    'amusementPark',
    'radioTower',
    'trainStation',
    'shoppingMall'
  ],
  deck: cardService.all().filter(card => card.incomeType !== 'landmark').map(card => ({
    slug: card.slug,
    count: card.resourceType === '🗼' ? 4 : 6
  }))
}

let playerSeq = 0
const createPlayer = () => ({
  cardSlugs: [
    'bakery', 'wheatField'
  ],
  name: `Player ${playerSeq++}`
})

const reducers = {
  INIT: (state, {playerCount}) => R.mergeDeepRight(state, {
    players: R.times(createPlayer, playerCount)
  })
}

const game = (state = initialState, action) => {
  console.log('DISPATCHED: ', state, action)
  if (reducers[action.type]) {
    return reducers[action.type](state, action.payload)
  }
  return state
}

export default game
