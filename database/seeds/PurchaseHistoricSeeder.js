'use strict'

/*
|--------------------------------------------------------------------------
| PurchaseHistoricSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Database = use('Database')

class PurchaseHistoricSeeder {
  async run() {
    await Factory.model('App/Models/User').createMany(10)
    await Factory.model('App/Models/PurchaseHistoric').createMany(10)
  }
}

module.exports = PurchaseHistoricSeeder
