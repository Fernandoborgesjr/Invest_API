'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class InvestimentSchema extends Schema {
  up () {
    this.create('investiments', (table) => {
      table.increments()
      /**/
      table
        .integer('user_id')
        .unsigned()
        .references('id')
        .inTable('users')
        .onUpdate('cascade')
        .onDelete('cascade')

      table.string('ticket')
      table.string('type').notNullable()
      table.boolean('deleted').notNullable().defaultTo(false)
      
      table.timestamps()
    })
  }

  down () {
    this.drop('investiments')
  }
}

module.exports = InvestimentSchema
