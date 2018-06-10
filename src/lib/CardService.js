const cards = {
  wheatField: {
    name: 'Wheat Field',
    slug: 'wheatField',
    diceCost: [1],
    constructionCost: 1,
    resourceType: '🌾',
    incomeType: 'primary',
    effectDescription: 'Get 1 coins from the bank, on anyone\'s turn'
  },
  ranch: {
    name: 'Ranch',
    slug: 'ranch',
    diceCost: [2],
    constructionCost: 1,
    resourceType: '🐄',
    incomeType: 'primary',
    effectDescription: 'Get 1 coin from the bank, on anyone\'s turn'
  },
  bakery: {
    name: 'Bakery',
    slug: 'bakery',
    diceCost: [2, 3],
    constructionCost: 1,
    resourceType: '🍞',
    incomeType: 'secondary',
    effectDescription: 'Get 1 coin from the bank, on your turn only'
  },
  cafe: {
    name: 'Cafe',
    slug: 'cafe',
    diceCost: [3],
    constructionCost: 2,
    resourceType: '☕',
    incomeType: 'restaurant',
    effectDescription: 'Get 1 coin from the player who rolled the dice'
  },
  convinienceStore: {
    name: 'Convinience Store',
    slug: 'convinienceStore',
    diceCost: [4],
    constructionCost: 2,
    resourceType: '🍞',
    incomeType: 'secondary',
    effectDescription: 'Get 3 coins from the bank, on your turn only'
  },
  forest: {
    name: 'Forest',
    slug: 'forest',
    diceCost: [5],
    constructionCost: 3,
    resourceType: '⚙️',
    incomeType: 'primary',
    effectDescription: 'Get 1 coin from the bank, on anyone\'s turn'
  },
  stadium: {
    name: 'Stadium',
    slug: 'stadium',
    diceCost: [6],
    constructionCost: 6,
    resourceType: '🗼',
    incomeType: 'major',
    effectDescription: 'Get 2 coins from all players, on your turn only'
  },
  tvStation: {
    name: 'TV Station',
    slug: 'tvStation',
    diceCost: [6],
    constructionCost: 7,
    resourceType: '🗼',
    incomeType: 'major',
    effectDescription: 'Take 5 coins from any one player, on your turn only'
  },
  businessCenter: {
    name: 'Business Center',
    slug: 'businessCenter',
    diceCost: [6],
    constructionCost: 8,
    resourceType: '🗼',
    incomeType: 'major',
    effectDescription: 'Trade one non-🗼 establishment with another player, on your turn only'
  },
  cheeseFactory: {
    name: 'Cheese Factory',
    slug: 'cheeseFactory',
    diceCost: [7],
    constructionCost: 5,
    resourceType: '🏭',
    incomeType: 'secondary',
    effectDescription: 'Get 3 coins from the bank for each 🐄 establishment that you own, on your turn only'
  },
  furnitureFactory: {
    name: 'Furniture Factory',
    slug: 'furnitureFactory',
    diceCost: [8],
    constructionCost: 3,
    resourceType: '🏭',
    incomeType: 'secondary',
    effectDescription: 'Get 3 coins from the bank for each ⚙️ establishment that you own, on your turn only'
  },
  mine: {
    name: 'Mine',
    slug: 'mine',
    diceCost: [9],
    constructionCost: 6,
    resourceType: '⚙️',
    incomeType: 'primary',
    effectDescription: 'Get 5 coins from the bank, on anyone\'s turn'
  },
  familyRestaurant: {
    name: 'Family Restaurant',
    slug: 'familyRestaurant',
    diceCost: [9, 10],
    constructionCost: 3,
    resourceType: '☕',
    incomeType: 'restaurant',
    effectDescription: 'Get 1 coins from the player who rolled the dice'
  },
  appleOrchard: {
    name: 'Apple Orchard',
    slug: 'appleOrchard',
    diceCost: [10],
    constructionCost: 3,
    resourceType: '🌾',
    incomeType: 'primary',
    effectDescription: 'Get 3 coins from the bank, on anyone\'s turn'
  },
  fruitMarket: {
    name: 'Fruit Market',
    slug: 'fruitMarket',
    diceCost: [11, 12],
    constructionCost: 2,
    resourceType: '🍏',
    incomeType: 'secondary',
    effectDescription: 'Get 2 coins from the bank for each 🌾 establishment that you own, on your turn only'
  },

  amusementPark: {
    name: 'Amusement Park',
    slug: 'amusementPark',
    constructionCost: 16,
    resourceType: '🗼',
    effectDescription: 'If you roll doubles, take another turn after this one',
    incomeType: 'landmark'
  },
  radioTower: {
    name: 'Radio Tower',
    slug: 'radioTower',
    constructionCost: 22,
    incomeType: 'landmark',
    resourceType: '🗼',
    effectDescription: 'Once every turn, you can choose to re-roll your dice'
  },
  trainStation: {
    name: 'Train Station',
    slug: 'trainStation',
    constructionCost: 4,
    incomeType: 'landmark',
    resourceType: '🗼',
    effectDescription: 'You may role 1 or 2 dice'

  },
  shoppingMall: {
    name: 'Shopping Mall',
    slug: 'shoppingMall',
    constructionCost: 10,
    incomeType: 'landmark',
    resourceType: '🗼',
    effectDescription: 'Each of your ☕ and 🍞 establishments earn +1 coin'
  }
}

const asArray = Object.values(cards)
console.log('###', asArray)

export default {
  bySlug: slug => cards[slug],
  all: () => asArray
}
