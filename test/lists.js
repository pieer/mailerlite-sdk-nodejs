/* global describe, it */

'use strict'

var expect = require('expect.js')

var MailerLite = require('..')
var ML = new MailerLite()

const LIST_NAME = 'Mocha Test'
const LIST_RENAME = 'Mocha Test After Rename'

describe('Lists', () => {
  it('should return an array', (done) => {
    ML.Lists.getAll()
      .then((data) => {
        expect(data).not.to.be(undefined)
        expect(data).to.have.property('Results')
        expect(data.Results).to.be.an('array')
        done()
      })
  })

  it('should create a list and immediately remove it', (done) => {
    ML.Lists.addList(LIST_NAME)
      .then((data) => {
        expect(data.id).to.be.above(0)
        expect(data.name).to.be.equal(LIST_NAME)
        return ML.Lists.removeList(data.id)
      })
      .then(() => {
        done()
      })
  })

  it('should create a list, rename it, check if renamed, and remove it', (done) => {
    ML.Lists.addList(LIST_NAME)
      .then((data) => ML.Lists.updateList(data.id, LIST_RENAME))
      .then((data) => {
        expect(data.id).to.be.above(0)
        expect(data.name).to.be.equal(LIST_RENAME)
        return ML.Lists.removeList(data.id)
      })
      .then(() => {
        done()
      })
  })
})
