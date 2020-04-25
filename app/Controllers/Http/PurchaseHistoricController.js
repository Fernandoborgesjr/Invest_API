'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with purchasehistorics
 */
class PurchaseHistoricController {
  /**
   * Show a list of all purchasehistorics.
   * GET purchasehistorics
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ request, response, view }) {

  }

  async indexByTicket({ request, response }) {

  }

  /**
   * Create/save a new purchasehistoric.
   * POST purchasehistorics
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }) {
  }

  /**
   * Display a single purchasehistoric.
   * GET purchasehistorics/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, request, response, view }) {
  
  }


  /**
   * Update purchasehistoric details.
   * PUT or PATCH purchasehistorics/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {
  }

  /**
   * Delete a purchasehistoric with id.
   * DELETE purchasehistorics/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {

    //Set true to variable 'deleted'

  }
}

module.exports = PurchaseHistoricController
