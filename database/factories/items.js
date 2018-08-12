const { Factory } = require('rosie')
const pushid = require('pushid')
const Chance = require('chance')

const chance = new Chance()

module.exports = new Factory()
  .sequence('id', i => i.toString())
  .attr('name', () => chance.sentence())
  .attr('price', () => chance.floating())
  .attr('shoppinglistId', pushid())
  .attr('quantity', () => chance.integer())
  .attr('createdAt', () => chance.date().toISOString())
  .attr('updatedAt', () => chance.date().toISOString())
