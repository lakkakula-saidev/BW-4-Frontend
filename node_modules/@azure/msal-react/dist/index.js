
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./msal-react.cjs.production.min.js')
} else {
  module.exports = require('./msal-react.cjs.development.js')
}
