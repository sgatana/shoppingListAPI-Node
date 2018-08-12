const shoppingListFactory = require('../database/factories/shoppingList')
const db = require('../models')

const shoppinglist = shoppingListFactory.build()
describe('#models', () => {
  beforeEach(async () => {
    db.shoppingList.destroy({
      where: {},
      truncate: true,
    })
  })
  afterEach(async () => {
    db.shoppingList.destroy({
      where: {},
      truncate: true,
    })
  })
  describe('shoppingList model', () => {
    beforeEach(async () => {
      await db.shoppingList.create(shoppinglist)
    })
    test('should be able to insert and retrieve data', async () => {
      const [result] = await db.shoppingList.findAll({ raw: true })
      expect([result]).toHaveLength(1)
      expect(result).toHaveProperty('name')
    })
  })
})
