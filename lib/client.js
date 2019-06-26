'use strict'

/* Load Request module. */
var request = require('request')

/* Load static config. */
var config = require('../config')

/**
 * Initialises an API client.
 * @constructor
 * @param {string} apiKey - Your MailerLite API key.
 */
function Client (apiKey) {
  this.ApiKey = apiKey || process.env.MAILERLITE_API_KEY

  /* Generates the call URL. */
  var makeUrl = (method) => {
    return `${config.url}${method}?apiKey=${this.ApiKey}`
  }

  /* Generic request method. */
  var makeRequest = (verb, method, parameters) => {
    let uri = makeUrl(method)

    if (parameters && parameters.mergeUrl) {
      uri = uri + Object.keys(parameters).map(key => key !== 'mergeUrl' ? `&${key}=${parameters[key]}` : '').join('')
    }

    let promise = new Promise((resolve, reject) => {
      /* Prepare callback for request. */
      let cb = (err, res, body) => {
        /* Caught a protocol error. */
        if (err) {
          reject(err)
        } else {
          let data = JSON.parse(body)

          /* Caught a data error. */
          if (data && data.error) {
            reject(data.error)
          } else {
            /* Resolved successfully. */
            resolve(data)
          }
        }
      }

      /* Send callback to request. */
      request[verb](uri, parameters, cb)
    })

    /* Returns a promise. */
    return promise
  }

  /* GET method. */
  this.Get = (method, parameters) => {
    return makeRequest('get', method, parameters)
  }

  /* POST method. */
  this.Post = (method, parameters) => {
    return makeRequest('post', method, {
      form: parameters
    })
  }

  /* DELETE method. */
  this.Delete = (method, parameters) => {
    if (typeof parameters === 'undefined') {
      return makeRequest('del', method) 
    } else {
      return makeRequest('del', method, {
        form: parameters
      })
    }
  }
}

/* Export the submodule. */
module.exports = Client
