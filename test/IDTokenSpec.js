/**
 * Test dependencies
 */
const chai = require('chai')

/**
 * Assertions
 */
chai.should()
const expect = chai.expect

/**
 * Code under test
 */
const IDToken = require('../src/IDToken')

/**
 * Tests
 */
describe('IDToken', () => {
  describe('constructor', () => {
    it('should exist', () => {
      const token = new IDToken()
      expect(token).to.be.ok
    })
  })

  describe('TokenClaimsSet', () => {
    it('should support webid claim', () => {
      const claims = {
        iss: 'https://example.com',
        sub: 'user123',
        aud: 'client123',
        exp: Math.floor(Date.now() / 1000) + 3600,
        iat: Math.floor(Date.now() / 1000),
        webid: 'https://example.com/profile#me'
      }
      
      const token = new IDToken({ payload: claims })
      expect(token.payload.webid).to.equal('https://example.com/profile#me')
    })
  })
})
