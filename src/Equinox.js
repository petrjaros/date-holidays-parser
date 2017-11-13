'use strict'

const solstice = require('astronomia/lib/solstice')
const julian = require('astronomia/lib/julian')
const planetpos = require('astronomia/lib/planetposition')
const earth = new planetpos.Planet(require('astronomia/data/vsop87Bearth'))

const CalEvent = require('./CalEvent')

class Equinox extends CalEvent {
  /**
   * @param {object} [opts]
   * @param {string} opts.season - type of season (spring|summer|autumn|winter)
   * @param {number|string} opts.offset - offset in days
   */
  constructor (opts) {
    opts = opts || {}
    super(opts)

    this._season = opts.season
    this._timezone = opts.timezone || 'GMT'
  }

  inYear (year) {
    return this
  }
}
module.exports = Equinox
