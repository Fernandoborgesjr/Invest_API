'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PurchaseHistoricSchema extends Schema {
  up() {
    this.create('purchase_historics', (table) => {
      table.increments()

      table.integer('quantity').notNullable()
      table.float('pricePerShare').notNullable()
      table.boolean('deleted').notNullable().defaultTo(false)
      table.timestamps()
    })
  }

  down() {
    this.drop('purchase_historics')
  }
}

module.exports = PurchaseHistoricSchema
