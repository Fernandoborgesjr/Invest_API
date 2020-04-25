'use strict'

/*
|--------------------------------------------------------------------------
| Factory
|--------------------------------------------------------------------------
|
| Factories are used to define blueprints for database tables or Lucid
| models. Later you can use these blueprints to seed your database
| with dummy data.
| Doc: https://chancejs.com/index.html
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Hash = use('Hash')

Factory.blueprint('App/Models/User', async (faker) => {
    return {
        username: faker.username(),
        email: faker.email(),
        password: await Hash.make(faker.password())
    }
})


Factory.blueprint('App/Models/PurchaseHistoric', async (faker) => {
    return {
        quantity: faker.integer({ min: 0, max: 1000 }),
        pricePerShare: faker.floating({ min: 1, max: 190 })
    }
})


