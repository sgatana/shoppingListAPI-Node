const { Factory } = require('rosie')
const Chance = require('chance')

const chance = new Chance()

module.exports = new Factory()
  .sequence('id', i => i.toString())
  .attr('name', () => chance.sentence())
  .attr('firstName', () => chance.sentence())
  .attr('lastName', () => chance.sentence())
  .attr('email', () => chance.email())
  .attr('createdAt', () => chance.date().toISOString())
  .attr('updatedAt', () => chance.date().toISOString())
