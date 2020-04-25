'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SalesHistoricSchema extends Schema {
  up() {
    this.create('sales_historics', (table) => {
      table.increments()
      table.integer('quantity').notNullable()
      table.float('pricePerShare').notNullable()
      table.boolean('deleted').notNullable().defaultTo(false)
      table.timestamps()
    })
  }

  down() {
    this.drop('sales_historics')
  }
}

module.exports = SalesHistoricSchema
